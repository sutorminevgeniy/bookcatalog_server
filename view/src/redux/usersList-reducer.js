const ADD_USER = 'ADD-USER';
const GIVE_ACCESS = 'GIVE-ACCESS';
const REMOVE_ACCESS = 'REMOVE-ACCESS ';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


// Начальное состояние приложения
// [{ id: '1', login: 'admin', password: '',  name: 'Босс', email: '', isAdmin: true}]
const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
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
                users: [...action.users],
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
export const setUsersCreator = (users, totalUserCount) => {
    return {
        type: SET_USERS,
        users,
        totalUserCount,
    }
}
export const setCurrentPageCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}
export const toggleIsFetchingCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}

export default usersListReducer;