import style from './style.module.css'

import Item from './Item';

import ReviewsList from '../ReviewsList';

const BooksList = (props) => {
  const booksElements = props.state.books.map( 
    row => <Item name={row.name} author={row.author} id={row.id} key={row.id} />
  );

  return (
    <div className="books">
      <div className={style.bookList}>
        {booksElements}
      </div>
      <div>
        <ReviewsList state={props.state.reviews} />
      </div>
    </div>
  );
};

export default BooksList;
