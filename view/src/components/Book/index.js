
import { useParams } from 'react-router-dom';

import style from './style.module.css'

import ReviewsList from '../ReviewsList';

const BooksList = (props) => {
  // Получение :id параметра из URL.
  let { id } = useParams();

  return (
    <div className="books">
      <h1>Книга {id}</h1>
      <div>Автор 1</div>
      <div className={style.bookList}>
        Описание книги {id}
      </div>
      <div>
        <ReviewsList state={props.state.reviews} />
      </div>
    </div>
  );
};

export default BooksList;
