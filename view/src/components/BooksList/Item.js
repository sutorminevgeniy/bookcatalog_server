import style from './style.module.css'

import imgBookDefault from './book.svg';

import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={style.book}>
      <NavLink to="/book/1" className={style.image}><img src={imgBookDefault} alt=""/></NavLink>
      <NavLink to="/book/1" className={style.name}>{props.name}</NavLink>
      <NavLink to="/author/1" className={style.author}>{props.author}</NavLink>
    </div>
  );
};

export default Item;
