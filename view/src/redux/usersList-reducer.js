
import {usersAPI} from '../api/api';

const ADD_USER = 'ADD-USER';
const GIVE_ACCESS = 'GIVE-ACCESS';
const REMOVE_ACCESS = 'REMOVE-ACCESS ';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_CHANGING_ACCESS = 'TOGGLE-IS-CHANGING-ACCESS';


// Начальное состояние приложения
// [{ id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true}]
const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    isChangingAccess: [],
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
                // users: [...action.users], 
                users: action.users.map(user => (
                    {...user,
                        isAdmin: user.followed})), // !!! для тестовой базы
                totalUserCount: action.totalUserCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_CHANGING_ACCESS:
            return {
                ...state,
                isChangingAccess: action.isProgress
                    ? [...state.isChangingAccess, action.id]
                    : state.isChangingAccess.filter(id => id !== action.id),
            }
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const addUser = (login, password, name, email) => {
    return {
        type: ADD_USER,
        login,
        password,
        name,
        email,
    }
}
export const giveAccess = (id) => {
    return {
        type: GIVE_ACCESS,
        id,
    }
}
export const removeAccess = (id) => {
    return {
        type: REMOVE_ACCESS,
        id,
    }
}
export const setUsers = (users, totalUserCount) => {
    return {
        type: SET_USERS,
        users,
        totalUserCount,
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}
export const toggleIsChangingAccess = (isProgress, id) => {
    return {
        type: TOGGLE_IS_CHANGING_ACCESS,
        isProgress,
        id,
    }
}

// Ф-и (Thunk) для создания асинхронных действий
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items, data.totalCount));
                // this.props.setUsers([
                //     { id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true},
                //     { id: '2', login: 'user1', password: '',  name: 'Пользователь1', email: '', isAdmin: false},
                //     { id: '3', login: 'user2', password: '',  name: 'Пользователь2', email: '', isAdmin: false},
                // ], 3);
                dispatch(toggleIsFetching(false));
            });
    }
};
export const postAccess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsChangingAccess(true, id));
        
        usersAPI.postAccess(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(giveAccess(id));
                }
                dispatch(toggleIsChangingAccess(false, id));
            })
            .catch(() => {
                dispatch(toggleIsChangingAccess(false, id));
            });
    };
};
export const deleteAccess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsChangingAccess(true, id));

        usersAPI.deleteAccess(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(removeAccess(id));
            }
                dispatch(toggleIsChangingAccess(false, id));
            })
            .catch(() => {
                dispatch(toggleIsChangingAccess(false, id));
            });
        };
};

export default usersListReducer;