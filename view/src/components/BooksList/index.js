import style from './style.module.css'

import Item from './Item';

import ReviewsList from '../ReviewsList';

const BooksList = () => {
  const booksData = [
    { name: "Книга 1", author: "Автор 1", id: "1" },
    { name: "Книга 2", author: "Автор 2", id: "2" },
    { name: "Книга 3", author: "Автор 3", id: "3" },
  ];

  const booksElements = booksData.map( 
    row => <Item name={row.name} author={row.author} id={row.id} key={row.id} />
  );

  return (
    <div className="books">
      <div className={style.bookList}>
        {booksElements}
      </div>
      <div>
        <ReviewsList />
      </div>
    </div>
  );
};

export default BooksList;
