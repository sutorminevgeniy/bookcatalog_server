import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './UsersList.module.css'

const UsersList = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="users">
            <h1>Пользователи</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Логин</th>
                        <th>Почта</th>
                        <th>Права</th>
                        <th></th>
                    </tr>                    
                </thead>
                <tbody>
                    {props.users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td><NavLink to={'/user/' + user.id}>{user.name}</NavLink></td>
                                <td>{user.login}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'Админестратор' : 'Гость'}</td>
                                <td>
                                    {user.isAdmin
                                    ? (<button
                                            disabled={props.isChangingAccess.some(id => id === user.id)}
                                            onClick={() => props.removeAccess(user.id)}>Запретить доступ</button>)
                                    : (<button
                                            disabled={props.isChangingAccess.some(id => id === user.id)}
                                            onClick={() => props.giveAccess(user.id)}>Разрешить доступ</button>)}
                                </td>
                            </tr>
                        );
                    })}                    
                </tbody>
            </table>
            <hr/>
            <div className={style.paginate}>
                {pages.map((page) => (
                    <span
                        onClick={() => { props.onPageChanged(page)}}
                        className={props.currentPage === page ? style.selectedPage : ''}
                        key={page}>{page}</span> 
                ))}
            </div>
        </div>
    );        
}


export default UsersList;