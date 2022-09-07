import {connect} from 'react-redux';

import {
    addUserCreator,
    giveAccessCreator,
    removeAccessCreator,
    setUsersCreator,
    setCurrentPageCreator } from '../../redux/usersList-reducer'

import UsersList from './UsersList'


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


const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);


export default UsersListContainer;