import React from 'react';

import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login'
import SignUp from './pages/SignUp';

import Header from './components/Header/Header';

import { GifsContextProvider } from './context/GifsContext';
import { UserContextProvider } from './context/UserContext'

import { Route, Link, Switch } from "wouter";

import './App.scss'

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Header/>
          <section className="App-header">
            <Link to='/'>
              <div className='title-container'>
                  <button data-text="Awesome" className="title-btn">
                    <span className="actual-text">&nbsp;iFFy&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;iFFy&nbsp;</span>
                  </button>
            </div>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route path='/' component={Home} />
                <Route path='/search/:keyword/:rating?' component={SearchResults} />
                <Route path='/gif/:id' component={Detail} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/:rest*' component={ErrorPage} />
              </Switch>
            </GifsContextProvider>
          </section>
      </div>
    </UserContextProvider>
  )
}

export default App
