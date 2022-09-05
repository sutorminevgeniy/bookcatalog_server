import AuthorsList from './AuthorsList';

const AuthorsListContainer = (props) => {
  const state = props.store.getState();

  return (<AuthorsList
    authors={state.authorsListPage.authors}/>
  );
};

export default AuthorsListContainer;
