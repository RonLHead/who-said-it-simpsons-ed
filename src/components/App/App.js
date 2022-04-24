import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';
import FavoriteQuotes from '../FavoriteQuotes/FavoriteQuotes';
import Woohoo from '../Woohoo/Woohoo';
import Doh from '../Doh/Doh';
import { Switch, NavLink, Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
  const [woohooScore, setWoohooScore] = useState(0);
  const [dohScore, setDohScore] = useState(0);
  const [favQuotes, setFavQuotes] = useState([]);

  const addFavQuotes = (newQuote) => {
      if(!favQuotes.find(quote => quote === newQuote)) {
        setFavQuotes([
          ...favQuotes, newQuote
        ])
      } 
  }

  useEffect(() => {
    console.log(favQuotes)
  }, [favQuotes])

  const deleteQuote = (quote) => {
    const filteredQuotes = favQuotes.filter(saying => saying != quote)
    setFavQuotes(filteredQuotes)
  }

  const location = useLocation();

  const updateWoohooScore = () => {
    setWoohooScore(woohooScore + 1);
  }

  const updateDohScore = () => {
    setDohScore(dohScore + 1);
  }


  return (
    <main className="App">
      <header className='App-header'>
        <h1 className='App-title'>Who Said It?</h1>
        <img className='App-logo' alt='simpsons-logo' src='pnghost_bart-simpson-marge-simpson-logo-simpsons.png'/>
      </header>
      <nav className='navbar'>
        <h2>Woohoo: {woohooScore}</h2>
        <h2>D'oh: {dohScore}</h2>
        {location.pathname === '/favorite-quotes'
           ? (<NavLink to='/home' style={{textDecoration: 'none'}}>
              <h2 className='home-button'>Home</h2>
            </NavLink>)
          : (<NavLink to='/favorite-quotes' style={{textDecoration: 'none'}}>
              <h2 className='fav-quotes-button'>Fav&nbsp;Quotes</h2>
          </NavLink>)
        }
      </nav>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home'>
          <Game addFavQuotes={addFavQuotes}/>
        </Route>
        <Route exact path='/favorite-quotes'>
          <FavoriteQuotes favQuotes={favQuotes} deleteQuote={deleteQuote}/>
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