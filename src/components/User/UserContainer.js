import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {withRouter} from '../../hoc/withRouter';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getUser} from '../../redux/user-reducer';

import User from './User';


class UserContainer extends React.Component {
  componentDidMount() {
    const id = this.props.router.params.id;
    this.props.getUser(id);
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
    connect(mapStateToProps, {getUser})
  )(UserContainer);
