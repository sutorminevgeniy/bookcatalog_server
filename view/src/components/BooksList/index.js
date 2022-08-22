import style from './style.module.css'

import Item from './Item';

import ReviewsList from '../ReviewsList';

const BooksList = () => {
  return (
    <div className="books">
      <div className={style.bookList}>
        <Item name="Книга 1" author="Автор 1"/>
        <Item name="Книга 2" author="Автор 2"/>
        <Item name="Книга 3" author="Автор 3"/>
      </div>
      <div>
        <ReviewsList />
      </div>
    </div>
  );
};

export default BooksList;
