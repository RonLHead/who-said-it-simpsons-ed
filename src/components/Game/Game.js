import React, { useEffect, useState } from 'react';
import getSimpsonsData from '../../apiCalls';
import './Game.css';

const Game = () => {
    const [round, setRound] = useState('');
    const [game, setGame] = useState(false);

    useEffect(() => {
        loadRound()
    }, [])

    const loadRound = () => {
        getSimpsonsData()
            .then(data => {
                return setRound(data[0])
            })
    }
    
    let gamePlay;
    
    if(game === false) {
        gamePlay = (
            <section className='quote-body'>
                <div className='quote'>
                    <p className='quote-font'>{!round ? 'Loading...' : round.quote}</p>
                </div>
                <button className='quote-button' onClick={()=>{setGame(true)}}>
                    <p>Click when you know</p>
                    <p><em>Who Said It</em></p>
                </button>
                <img className='simpsons-family' alt='Simpsons-family' src='pnghost_simpson-family-bankgrap-the-simpsons-opening-sequence-homer-the-great-television.png' />
            </section>
        )} else if(game === true) {
            gamePlay = (
                <section className='quote-body'>
                <div className='quote'>
                    <p className='quote-font'>{!round ? 'Loading...' : round.quote}</p>
                </div>
                <div>
                    <p>{!round ? 'Loading...' : `It was ${round.character}!`}</p>
                </div>
                <img className='simpsons-family' alt='Simpsons-character' src={round.image} />
                <p>Is this who you guessed?</p>
                <div>
                    <button>Woohoo!</button>
                    <button>D'oh!</button>zzzzzz
                </div>
            </section>
            )
        }

    return (
        <section>
            {gamePlay}
        </section>
        
    )
}

export default Game;