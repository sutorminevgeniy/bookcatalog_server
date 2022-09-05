import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import BooksListContainer from './components/BooksList/BooksListContainer';
import Book from './components/Book/Book';
import AuthorsListContainer from './components/AuthorsList/AuthorsListContainer';
import Filter from './components/Filter';


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>

        <main>
          <aside>
            <Filter />
          </aside>

          <div className='content'>
            <Routes>                
              <Route path='/books' element={<BooksListContainer 
                store={props.store} />} />
              <Route path='/book/:id' element={<Book 
                state={props.store.getState().bookPage}
                dispatch={props.dispatch} />} />
              <Route path='/authors' element={<AuthorsListContainer 
                store={props.store} />} />
              <Route path="*" element={<p>Такой страницы еще нет!</p>}
              />
            </Routes>
          </div>        
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
