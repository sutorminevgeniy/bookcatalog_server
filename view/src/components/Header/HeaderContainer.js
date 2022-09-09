import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';

import {usersAPI} from '../../api/api';
import {setUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getMe()
            .then((data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setUserData(id, email, login,)
                }
            }));
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);