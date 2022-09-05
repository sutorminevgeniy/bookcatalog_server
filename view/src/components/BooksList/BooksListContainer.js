import BooksList from './BooksList';

import {addBookCreator} from '../../redux/booksList-reducer';

const BooksListContainer = (props) => {
  const state = props.store.getState();

  const addBook = (name, author, description) => {
    const action = addBookCreator(name, author, description);
    props.store.dispatch(action);
  }

  return ( <BooksList addBook={addBook}
    books={state.booksListPage.books} />
  );
};

export default BooksListContainer;
