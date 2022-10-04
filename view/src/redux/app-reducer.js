import {getUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

// Начальное состояние приложения
const initialState = {
    initialized: false,
};

// Функция запускающая различные изменеия состояния приложения
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: // добавление отзыва в часности
            return {
                ...state,
                initialized: true,
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

// Ф-и (Thunk) для создания асинхронных действий
export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(getUserData());

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess ());
            });

        
    }
};

export default appReducer;