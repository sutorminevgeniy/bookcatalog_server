import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {
    addUser,
    giveAccess,
    removeAccess,
    setUsers,
    setCurrentPage,
    toggleIsFetching } from '../../redux/usersList-reducer';

import UsersList from './UsersList';
import Preloader from '../Preloader/Preloader';

class UsersListContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
                .then(response => {
                    this.props.setUsers(response.data.items, response.data.totalCount);
                    // this.props.setUsers([
                    //     { id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true},
                    //     { id: '2', login: 'user1', password: '',  name: 'Пользователь1', email: '', isAdmin: false},
                    //     { id: '3', login: 'user2', password: '',  name: 'Пользователь2', email: '', isAdmin: false},
                    // ], 3);
                    this.props.toggleIsFetching(false);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }
    giveAccess = (id) => {
        this.props.toggleIsFetching(true);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '3800a16a-e2c0-4336-8594-268b9cc94411'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.giveAccess(id);             
                }
                this.props.toggleIsFetching(false);       
            })
            .catch(() => {
                this.props.toggleIsFetching(false);
            });
    }
    removeAccess = (id) => {
        this.props.toggleIsFetching(true);
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '3800a16a-e2c0-4336-8594-268b9cc94411'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.removeAccess(id);                 
            }
                this.props.toggleIsFetching(false);   
            })
            .catch(() => {
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return ( <>
            { this.props.isFetching ? <Preloader /> : null }
            <UsersList
                users={this.props.users}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                removeAccess={this.removeAccess}
                giveAccess={this.giveAccess}
                onPageChanged={this.onPageChanged} />
        </>);        
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersListPage.users,
        pageSize: state.usersListPage.pageSize,
        totalUserCount: state.usersListPage.totalUserCount,
        currentPage: state.usersListPage.currentPage,
        isFetching: state.usersListPage.isFetching,
    }
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser: (login, password, name, email) => {
//             dispatch(addUser(login, password,  name, email));
//         },
//         giveAccess: (id) => {
//             dispatch(giveAccess(id));
//         },
//         removeAccess: (id) => {
//             dispatch(removeAccess(id));
//         },
//         setUsers: (users, totalUserCount) => {
//             dispatch(setUsers(users, totalUserCount));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {
        addUser, // сокращённая запись mapDispatchToProps() ф-и зкоментированной выше
        giveAccess,
        removeAccess,
        setUsers,
        setCurrentPage,
        toggleIsFetching
    })(UsersListContainer);