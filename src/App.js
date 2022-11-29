import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {initializeApp} from './redux/app-reducer';
import {withRouter} from './hoc/withRouter';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';

import BooksListContainer from './components/BooksList/BooksListContainer';
import BookContainer from './components/Book/BookContainer';
import AuthorsListContainer from './components/AuthorsList/AuthorsListContainer';
import UsersListContainer from './components/UsersList/UsersListContainer';
import UserContainer from './components/User/UserContainer';
import Login from './components/Login/Login';
import Filter from './components/Filter';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
      this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
        <div className="wrapper">
          <header>
            <HeaderContainer />
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
                <Route path='/users' element={<UsersListContainer />} />
                <Route path='/user/:id' element={<UserContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<p>Такой страницы еще нет!</p>} />
              </Routes>
            </div>        
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( //  ф-я для более удобной записи нескольки HOC
    withRouter,
    connect(mapStateToProps, {initializeApp})
  )(App);