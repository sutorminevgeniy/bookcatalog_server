
import style from './Book.module.css'

import imgBookDefault from './book.svg';

import ReviewsListContainer from '../ReviewsList/ReviewsListContainer';

import { useParams } from 'react-router-dom';

const Book = (props) => {
  // Получение :id параметра из URL.
  let { id } = useParams();

  return (
    <div className="books">
      <h1>Книга {id}</h1>
      <div>Автор {id}</div>
      <img src={imgBookDefault} alt=""/>
      <div className={style.bookList}>
        Описание книги {id}
      </div>
      <div>
        <ReviewsListContainer />
      </div>
    </div>
  );
};

export default Book;
