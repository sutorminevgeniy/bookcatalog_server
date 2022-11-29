import {connect} from 'react-redux';

import AuthorsList from './AuthorsList';

const mapStateToProps = (state) => {
  return {
    authors: state.authorsListPage.authors
  };
};

const AuthorsListContainer = connect(mapStateToProps)(AuthorsList);

export default AuthorsListContainer;
