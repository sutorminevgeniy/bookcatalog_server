import style from './User.module.css'

import { useParams } from 'react-router-dom';

const User = (props) => {
  // Получение :id параметра из URL.
  let { id } = useParams();

  return (
    <div className="user">
      <h1>{props.user.name} {id}</h1>
      <div>{props.user.login}</div>
      <div>{props.user.email}</div>
      <div className={style.role}>{props.user.isAdmin ? 'Админестратор' : 'Гость'}</div>
    </div>
  );
};

export default User;
