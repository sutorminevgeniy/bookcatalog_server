import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {setUser} from '../../redux/user-reducer';

import User from './User';


class UserContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
          this.props.setUser({
            name: response.data.fullName
          });
      });
  }
  render() {
    return (
      <User {...this.props}/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userPage.user
  };
};


export default connect(mapStateToProps, {setUser})(UserContainer);
