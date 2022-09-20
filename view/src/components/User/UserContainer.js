import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {usersAPI} from '../../api/api';
import {withRouter} from '../hoc/withRouter';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {setUser} from '../../redux/user-reducer';

import User from './User';


class UserContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.id;

    usersAPI.getUser(userId)
      .then(data => {
          this.props.setUser({
            name: data.fullName
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

export default compose( //  ф-я для более удобной записи нескольки HOC
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUser})
  )(UserContainer);
