import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import BooksListContainer from './components/BooksList/BooksListContainer';
import BookContainer from './components/Book/BookContainer';
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
              <Route path='/books' element={<BooksListContainer />} />
              <Route path='/book/:id' element={<BookContainer />} />
              <Route path='/authors' element={<AuthorsListContainer />} />
              <Route path="*" element={<p>Такой страницы еще нет!</p>} />
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
