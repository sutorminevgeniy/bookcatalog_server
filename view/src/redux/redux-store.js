import {createStore, combineReducers} from "redux";

import booksListReducer from './booksList-reducer';
import bookReducer from './book-reducer';
import authorListReducer from './authorsList-reducer';
import usersListReducer from './usersList-reducer';
import userReducer from './user-reducer';

const reducers = combineReducers({
    booksListPage: booksListReducer,
    bookPage: bookReducer,
    authorsListPage: authorListReducer,
    usersListPage: usersListReducer,
    userPage: userReducer,
});

const store = createStore(reducers);

export default store;