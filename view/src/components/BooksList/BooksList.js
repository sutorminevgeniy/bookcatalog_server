import React from 'react';

import style from './BooksList.module.css'

import BooksListItem from './BooksListItem';

import {addBookCreator} from '../../redux/state';

const BooksList = (props) => {
  const nameElement = React.createRef();
  const authorElement = React.createRef();
  const descriptionElement = React.createRef();

  const onClickAddBook = () => {
    const name = nameElement.current.value;
    const author = authorElement.current.value;
    const description = descriptionElement.current.value;

    const action = addBookCreator(name, author, description);

    props.dispatch(action);

    nameElement.current.value = '';
    authorElement.current.value = '';
    descriptionElement.current.value = '';
  }

  const booksElements = props.state.books.map( 
    row => <BooksListItem name={row.name} author={row.author} id={row.id} key={row.id} />
  );

  return (
    <div className="books">
      <h1>Книги</h1>

      <div className={style.bookList}>
        {booksElements}
      </div>

      <div>
        <div>
          <input ref={nameElement} type="text"></input>
        </div>
        <div>
          <select ref={authorElement}>
            <option>Автор 1</option>
            <option>Автор 2</option>
            <option>Автор 3</option>
          </select>
        </div>
        <div>
          <textarea ref={descriptionElement}></textarea>
        </div>
        <div>
          <button onClick={onClickAddBook}>Добавить книгу</button>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
