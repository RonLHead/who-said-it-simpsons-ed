import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <section className='quote-body'>
            <div className='quote'>
                <p className='quote-font'>“Quote from the Simpsons to guess in the game”</p>
            </div>
            <button className='quote-button'>
                <p>Click when you know</p>
                <p><em>Who Said It</em></p>
            </button>
            <img className='simpsons-family' alt='Simpsons-family' src='pnghost_simpson-family-bankgrap-the-simpsons-opening-sequence-homer-the-great-television.png' />
        </section>
    )
}

export default Quote;