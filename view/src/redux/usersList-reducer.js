const ADD_USER = 'ADD-USER';
const GIVE_ACCESS = 'GIVE-ACCESS';
const REMOVE_ACCESS = 'REMOVE-ACCESS ';
const SET_USERS = 'SET-USERS';

// Начальное состояние приложения
// [{ id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true}]
const initialState = {
    users: [],
};

// Функция запускающая различные изменеия состояния приложения
const usersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = { 
                login: action.login,
                password: action.password,
                name: action.name,
                email: action.email,
                id: state.users.length + 1
            };
            
            return {
                ...state,
                users: [
                    ...state.users,
                    newUser
                ]
            }
        case GIVE_ACCESS:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id) {
                        return {
                            ...user,
                            isAdmin: true,
                        }
                    }
                    return user;
                }),
            }
        case REMOVE_ACCESS:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id) {
                        return {
                            ...user,
                            isAdmin: false,
                        }
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const addUserCreator = (login, password, name, email) => {
    return {
        type: ADD_USER,
        login,
        password,
        name,
        email,
    }
}
export const giveAccessCreator = (id) => {
    return {
        type: GIVE_ACCESS,
        id,
    }
}
export const removeAccessCreator = (id) => {
    return {
        type: REMOVE_ACCESS,
        id,
    }
}
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export default usersListReducer;