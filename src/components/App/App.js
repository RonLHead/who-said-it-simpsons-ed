import React, { useState } from 'react';
import Game from '../Game/Game';
import FavoriteQuotes from '../FavoriteQuotes/FavoriteQuotes';
import Woohoo from '../../Woohoo/Woohoo';
import Doh from '../Doh/Doh';
import { Switch, NavLink, Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
  const [woohooScore, setWoohooScore] = useState(0);
  const [dohScore, setDohScore] = useState(0);
  const [favQuotes, setFavQuotes] = useState('');

  const location = useLocation();

  const updateWoohooScore = () => {
    setWoohooScore(woohooScore + 1);
  }

  const updateDohScore = () => {
    setDohScore(dohScore + 1);
  }

  return (
    <main className="App">
      <header>
        <h1>Who Said It?</h1>
        <img className='App-logo' alt='simpsons-logo' src='pnghost_bart-simpson-marge-simpson-logo-simpsons.png'/>
      </header>
      <nav className='navbar'>
        <h2>Woohoo: {woohooScore}</h2>
        <h2>D'oh: {dohScore}</h2>
        {location.pathname === '/favorite-quotes'
           ? (<NavLink to='/home' style={{textDecoration: 'none'}}>
              <h2>Home</h2>
            </NavLink>)
          : (<NavLink to='/favorite-quotes' style={{textDecoration: 'none'}}>
              <h2>Fav&nbsp;Quotes</h2>
          </NavLink>)
        }
      </nav>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home'>
          <Game />
        </Route>
        <Route exact path='/favorite-quotes'>
          <FavoriteQuotes />
        </Route>
        <Route exact path='/woohoo'>
          <Woohoo updateWoohooScore={updateWoohooScore}/>
        </Route>
        <Route>
          <Doh updateDohScore={updateDohScore}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;