import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'

import booksListReducer from './booksList-reducer';
import bookReducer from './book-reducer';
import authorListReducer from './authorsList-reducer';
import usersListReducer from './usersList-reducer';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
    booksListPage: booksListReducer,
    bookPage: bookReducer,
    authorsListPage: authorListReducer,
    usersListPage: usersListReducer,
    userPage: userReducer,
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;