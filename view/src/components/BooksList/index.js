import style from './style.module.css'

import Item from './Item';

const BooksList = (props) => {
  const booksElements = props.state.books.map( 
    row => <Item name={row.name} author={row.author} id={row.id} key={row.id} />
  );

  return (
    <div className="books">
      <h1>Книги</h1>
      <div className={style.bookList}>
        {booksElements}
      </div>
    </div>
  );
};

export default BooksList;
