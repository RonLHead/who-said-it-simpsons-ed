import React, { useEffect, useState } from 'react';
import getSimpsonsQuote from '../../apiCalls';
import './Quote.css';

const Quote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        loadQuote()
    }, [])

    const loadQuote = () => {
        getSimpsonsQuote()
            .then(data => {
                return setQuote(data[0].quote)
            })
    }
    
    return (
        <section className='quote-body'>
            <div className='quote'>
                <p className='quote-font'>{!quote ? 'Loading...' : quote}</p>
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