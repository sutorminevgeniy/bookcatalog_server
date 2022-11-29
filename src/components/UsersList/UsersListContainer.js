import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {
    addUser,
    postAccess,
    deleteAccess,
    setCurrentPage,
    requestUsers } from '../../redux/usersList-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    getCurrentPage,
    getIsChangingAccess,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers,
} from '../../redux/usersList-selectors';

import UsersList from './UsersList';
import Preloader from '../common/Preloader/Preloader';

class UsersListContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageSize);
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
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersListPage.users,
//         pageSize: state.usersListPage.pageSize,
//         totalUserCount: state.usersListPage.totalUserCount,
//         currentPage: state.usersListPage.currentPage,
//         isFetching: state.usersListPage.isFetching,
//         isChangingAccess: state.usersListPage.isChangingAccess,
//     }
// };
//  Ф-я для выбора необходимых свойст из state (через селекторы) для предачи в компонент
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isChangingAccess: getIsChangingAccess(state),
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

export default compose( //  ф-я для более удобной записи нескольких HOC
        withAuthRedirect,
        connect(mapStateToProps, {
            addUser, // сокращённая запись mapDispatchToProps() ф-и зкоментированной выше
            postAccess,
            deleteAccess,
            setCurrentPage,
            requestUsers
        })
    )(UsersListContainer);