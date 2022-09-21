import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {
    addUser,
    postAccess,
    deleteAccess,
    setCurrentPage,
    getUsers } from '../../redux/usersList-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

import UsersList from './UsersList';
import Preloader from '../Preloader/Preloader';

class UsersListContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }
    giveAccess = (id) => {
        this.props.postAccess(id);
    }
    removeAccess = (id) => {
        this.props.deleteAccess(id);
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

// Ф-я для выбора необходимых свойст из state  для предачи в компонент
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

// Ф-я для выбора действий из store для предачи в компонент
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

export default compose( //  ф-я для более удобной записи нескольки HOC
        withAuthRedirect,
        connect(mapStateToProps, {
            addUser, // сокращённая запись mapDispatchToProps() ф-и зкоментированной выше
            postAccess,
            deleteAccess,
            setCurrentPage,
            getUsers
        })
    )(UsersListContainer);