import React from 'react';
import {connect} from 'react-redux';

import {
    addUser,
    giveAccess,
    removeAccess,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleIsChangingAccess } from '../../redux/usersList-reducer';
import {usersAPI} from '../../api/api';

import UsersList from './UsersList';
import Preloader from '../Preloader/Preloader';

class UsersListContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setUsers(data.items, data.totalCount);
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

        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items, data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    giveAccess = (id) => {
        this.props.toggleIsChangingAccess(true, id);
        
        usersAPI.postAccess(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.giveAccess(id);             
                }
                this.props.toggleIsChangingAccess(false, id);
            })
            .catch(() => {
                this.props.toggleIsChangingAccess(false, id);
            });
    }
    removeAccess = (id) => {
        this.props.toggleIsChangingAccess(true, id);

        usersAPI.deleteAccess(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.removeAccess(id);                 
            }
                this.props.toggleIsChangingAccess(false, id);
            })
            .catch(() => {
                this.props.toggleIsChangingAccess(false, id);
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
                isChangingAccess={this.props.isChangingAccess}
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
        isChangingAccess: state.usersListPage.isChangingAccess,
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
        toggleIsFetching,
        toggleIsChangingAccess
    })(UsersListContainer);