import StoreContext from '../../StoreContext'; // Обертка для получения данных из context 
import BooksList from './BooksList';

import {addBookCreator} from '../../redux/booksList-reducer';

const BooksListContainer = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        const state = store.getState();

        const addBook = (name, author, description) => {
          const action = addBookCreator(name, author, description);
          store.dispatch(action);
        }

        return (
          <BooksList addBook={addBook}
            books={state.booksListPage.books} />        
        )
      }
    }</StoreContext.Consumer>
  );
};

export default BooksListContainer;
