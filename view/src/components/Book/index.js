
import style from './style.module.css'

import imgBookDefault from './book.svg';

import ReviewsList from '../ReviewsList';

import { useParams } from 'react-router-dom';

const BooksList = (props) => {
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
        <ReviewsList
          state={props.state.reviews}
          addReview={props.addReview}  />
      </div>
    </div>
  );
};

export default BooksList;
