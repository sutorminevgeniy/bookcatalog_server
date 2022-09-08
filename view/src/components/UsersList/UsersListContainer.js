import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {
    addUserCreator,
    giveAccessCreator,
    removeAccessCreator,
    setUsersCreator,
    setCurrentPageCreator } from '../../redux/usersList-reducer'
    
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    componentDidMount() {
            if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items, response.data.totalCount)
                    // this.props.setUsers([
                    //     { id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true},
                    //     { id: '2', login: 'user1', password: '',  name: 'Пользователь1', email: '', isAdmin: false},
                    //     { id: '3', login: 'user2', password: '',  name: 'Пользователь2', email: '', isAdmin: false},
                    // ], 3);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <UsersList
                users={this.props.users}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                removeAccess={this.props.removeAccess}
                giveAccess={this.props.giveAccess}
                onPageChanged={this.onPageChanged} />
        );        
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersListPage.users,
        pageSize: state.usersListPage.pageSize,
        totalUserCount: state.usersListPage.totalUserCount,
        currentPage: state.usersListPage.currentPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (login, password, name, email) => {
            dispatch(addUserCreator(login, password,  name, email));
        },
        giveAccess: (id) => {
            dispatch(giveAccessCreator(id));
        },
        removeAccess: (id) => {
            dispatch(removeAccessCreator(id));
        },
        setUsers: (users, totalUserCount) => {
            dispatch(setUsersCreator(users, totalUserCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);