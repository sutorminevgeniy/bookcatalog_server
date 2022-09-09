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
                isAuth: true
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}

export default authReducer;