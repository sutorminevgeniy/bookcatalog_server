import StoreContext from '../../StoreContext';
import AuthorsList from './AuthorsList';

const AuthorsListContainer = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        const state = store.getState();

        return (
          <AuthorsList
            authors={state.authorsListPage.authors}/>     
        )
      }
    }</StoreContext.Consumer>
  );
};

export default AuthorsListContainer;
