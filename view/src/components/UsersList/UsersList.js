import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response);
                    this.props.setUsers(response.data.items)
                    // this.props.setUsers([
                    //     { id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true},
                    //     { id: '2', login: 'user1', password: '',  name: 'Пользователь1', email: '', isAdmin: false},
                    //     { id: '3', login: 'user2', password: '',  name: 'Пользователь2', email: '', isAdmin: false},
                    // ]);
                })
        }
    }

    render() {
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
                        {this.props.users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.login}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? 'Админестратор' : 'Гость'}</td>
                                    <td>
                                        {user.isAdmin
                                        ? (<button onClick={() => this.props.removeAccess(user.id)}>Запретить доступ</button>)
                                        : (<button onClick={() => this.props.giveAccess(user.id)}>Разрешить доступ</button>)}
                                    </td>
                                </tr>
                            );
                        })}                    
                    </tbody>
                </table>
            </div>
        );        
    }
}


export default UsersList;