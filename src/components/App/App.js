import React, { useEffect, useState } from 'react';
import Quote from '../Quote/Quote';
import FavoriteQuotes from '../FavoriteQuotes/FavoriteQuotes';
import { NavLink, Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
  const [woohoo, setWoohoo] = useState(0);
  const [doh, setDoh] = useState(0);
  const [favQuotes, setFavQuotes] = useState('');

  const location = useLocation()
  console.log(location.pathname)
  
  return (
    <main className="App">
      <header>
        <h1>Who Said It?</h1>
        <img className='App-logo' alt='simpsons-logo' src='pnghost_bart-simpson-marge-simpson-logo-simpsons.png'/>
      </header>
      <nav className='navbar'>
        <h2>Woohoo: {woohoo}</h2>
        <h2>D'oh: {doh}</h2>
        {location.pathname === '/favorite-quotes'
           ? (<NavLink to='/home' style={{textDecoration: 'none'}}>
              <h2>Home</h2>
            </NavLink>)
          : (<NavLink to='/favorite-quotes' style={{textDecoration: 'none'}}>
              <h2>Fav&nbsp;Quotes</h2>
          </NavLink>)
        }
      </nav>
      <Redirect exact from='/' to='/home' />
      <Route exact path='/home'>
        <Quote />
      </Route>
      <Route exact path='/favorite-quotes'>
        <FavoriteQuotes />
      </Route>
    </main>
  );
}

export default App;