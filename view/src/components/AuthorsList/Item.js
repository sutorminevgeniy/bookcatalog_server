import style from './style.module.css'

import imgAuthorDefault from './author.svg';

import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={style.author}>
      <NavLink to="/author/1" className={style.image}><img src={imgAuthorDefault} alt=""/></NavLink>
      <NavLink to="/author/1" className={style.name}>{props.author}</NavLink>
      <div className={style.countBooks}>Книг: <NavLink to="/books">{props.countBooks}</NavLink></div>
    </div>
  );
};

export default Item;
