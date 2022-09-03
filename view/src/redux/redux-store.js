import {createStore, combineReducers} from "redux";

import booksListReducer from './booksList-reducer';
import bookReducer from './book-reducer';
import authorListReducer from './authorsList-reducer';

const reducers = combineReducers({
    booksListPage: booksListReducer,
    bookPage: bookReducer,
    authorsListPage: authorListReducer,
});

const store = createStore(reducers);

export default store;