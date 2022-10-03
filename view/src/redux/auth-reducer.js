import { stopSubmit } from 'redux-form';
import {usersAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

// Начальное состояние приложения
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

// Функция запускающая различные изменеия состояния приложения
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: // добавление отзыва в часности
            return {
                ...state,
                ...action.data,
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const setUserData = (id, email, login, isAuth=true) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    }
}

// Ф-и (Thunk) для создания асинхронных действий
export const getUserData = () => {
    return (dispatch) => {
        usersAPI.getMe()
            .then((data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setUserData(id, email, login));
                }
            }));
    }
};
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe)
            .then((data => {
                if (data.resultCode === 0) {
                    dispatch(getUserData());
                } else {
                    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';

                    dispatch(stopSubmit('login', {_error: message}));
                }
            }));
    }
};
export const logout = () => {
    return (dispatch) => {
        usersAPI.logout()
            .then((data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }
            }));
    }
};


export default authReducer;