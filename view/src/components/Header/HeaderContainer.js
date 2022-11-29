import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Header from './Header';

import {setUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response => {
                console.log(response);
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
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