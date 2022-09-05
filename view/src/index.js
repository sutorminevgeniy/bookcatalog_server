import React from 'react';

import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

//import store from './redux/store'
import store from './redux/redux-store';
import StoreContext from './StoreContext'; // Обертка для использования context

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const renderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App store={store} dispatch={store.dispatch.bind(store)} />
        </StoreContext.Provider>
      </React.StrictMode>);

};

renderEntireTree();

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();