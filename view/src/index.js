import React from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const books = [
  { name: "Книга 1", author: "Автор 1", id: "1" },
  { name: "Книга 2", author: "Автор 2", id: "2" },
  { name: "Книга 3", author: "Автор 3", id: "3" },
];
const authors =[
  { author: "Автор 1", countBooks: "11", id: "1" },
  { author: "Автор 2", countBooks: "13", id: "2" },
  { author: "Автор 3", countBooks: "8", id: "3" },
];
const reviews = [
  { user: "Пользователь 1", message: "Отзыв о книге 1", rate: "5", id: "1" },
  { user: "Пользователь 2", message: "Отзыв о книге 1", rate: "4", id: "2" },
  { user: "Пользователь 3", message: "Отзыв о книге 1", rate: "5", id: "3" },
];

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
              <App books={books} authors={authors} reviews={reviews} />
            </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
