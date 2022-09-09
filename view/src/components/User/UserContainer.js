import React from 'react';
import {connect} from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';

import {usersAPI} from '../../api/api';

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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUser})(withRouter(UserContainer));
