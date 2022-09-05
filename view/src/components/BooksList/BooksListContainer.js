import {connect} from 'react-redux';

import BooksList from './BooksList';

import {addBookCreator} from '../../redux/booksList-reducer';

const mapStateToProps = (state) => {
  return {
    books: state.booksListPage.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (name, author, description) => {
      const action = addBookCreator(name, author, description);
      dispatch(action);
    }
  };
}

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListContainer;
