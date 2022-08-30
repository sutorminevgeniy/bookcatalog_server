import React from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state, {subscribe, addReview} from './redux/state'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const renderEntireTree = () => {
    root.render(<React.StrictMode>
        <App state={state} addReview={addReview} />
      </React.StrictMode>);

};

renderEntireTree();

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();