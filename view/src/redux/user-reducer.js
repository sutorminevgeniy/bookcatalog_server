import {usersAPI} from '../api/api';

const SET_USER = 'SET-USER';

// Начальное состояние приложения
// user: { id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true },
const initialState = {
    user: {},
};

// Функция запускающая различные изменеия состояния приложения
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: // добавление отзыва в часности
            return {
                ...state,
                user: {...action.user}
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

// Ф-и (Thunk) для создания асинхронных действий
export const getUser = (id) => {
    return (dispatch) => {
        usersAPI.getUser(id)
            .then(data => {
                dispatch(setUser({
                    name: data.fullName
                }));
            });
    }
};

export default userReducer;