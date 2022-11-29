
import {connect} from 'react-redux';

import Book from './Book';


const mapStateToProps = (state) => {
  return {
    book: state.bookPage.book
  };
};


const BookContainer = connect(mapStateToProps)(Book);


export default BookContainer;
