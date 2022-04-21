import React, { Component } from 'react';
import Quote from '../Quote/Quote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      woohoo: 0,
      doh: 0,
      favoriteQuotes: []
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Who Said It?</h1>
          <img className='App-logo' alt='simpsons-logo' src='pnghost_bart-simpson-marge-simpson-logo-simpsons.png'/>
        </header>
        <nav>
          <h2>Woohoo: {this.state.woohoo}</h2>
          <h2>D'oh: {this.state.doh}</h2>
          <h2>Fav Quotes</h2>
        </nav>
        <Quote />
      </main>
    );
  }
}

export default App;