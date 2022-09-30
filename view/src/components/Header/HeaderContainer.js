import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';

import {getUserData, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer);