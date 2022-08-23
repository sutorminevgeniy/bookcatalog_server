import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import BooksList from './components/BooksList';
import AuthorsList from './components/AuthorsList';
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
              <Route path='/books' element={<BooksList data={props.books} reviews={props.reviews} />} />
              <Route path='/authors' element={<AuthorsList data={props.authors} />} />
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
