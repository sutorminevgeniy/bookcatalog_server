import style from './BooksList.module.css'

import imgBookDefault from './book.svg';

import { NavLink } from 'react-router-dom';

const BooksListItem = (props) => {
  return (
    <div className={style.book}>
      <NavLink to={"/book/" + props.id} className={style.image}><img src={imgBookDefault} alt=""/></NavLink>
      <NavLink to={"/book/" + props.id} className={style.name}>{props.name}</NavLink>
      <NavLink to="/author/1" className={style.author}>{props.author}</NavLink>
    </div>
  );
};

export default BooksListItem;
