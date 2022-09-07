import {connect} from 'react-redux';

import {addUserCreator, giveAccessCreator , removeAccessCreator, setUsersCreator} from '../../redux/usersList-reducer'

import UsersList from './UsersList'


const mapStateToProps = (state) => {
    return {
        users: state.usersListPage.users
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
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}


const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);


export default UsersListContainer;