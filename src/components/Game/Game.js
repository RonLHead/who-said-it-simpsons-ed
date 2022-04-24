import React, { useEffect, useState } from 'react';
import getSimpsonsData from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartOutline, faCircleCheck as checkedIcon } from '@fortawesome/free-regular-svg-icons';
import './Game.css';

const Game = (props) => {
    const [round, setRound] = useState('');
    const [game, setGame] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [err, setErr] = useState('')

    useEffect(() => {
        loadRound()
    }, [])

    const loadRound = () => {
        getSimpsonsData()
            .then(data => {
                return setRound(data[0])
            })
            .catch(error => {
                console.log("Error", error)
                return setErr(error)
              })
    }

    let displayQuote;       
    
    if(!favorite || !round) {
        displayQuote = 
            <div className='quote'>
                <div className='top-corner'>
                    <FontAwesomeIcon className='heart' icon={heartOutline} size='lg' onClick={()=>{
                        props.addFavQuotes(round.quote)
                        setFavorite(true)
                        console.log(favorite)
                    }}/>                   
                </div>
                <p className='quote-font'>{!round ? 'Loading...' : round.quote}</p>
            </div>
            
        } else {
        displayQuote = 
            <div className='quote'>
                <div className='top-corner'>
                    <FontAwesomeIcon className='checked' icon={checkedIcon} size='lg'/>
                </div>
                <p className='quote-font'>{!round ? 'Loading...' : round.quote}</p>
            </div>
        }

    let gamePlay;
    
    if(round && !game) {
        gamePlay = (
            <section className='quote-body'>
                {displayQuote}
                <button className='quote-button' onClick={()=>{setGame(true)}}>
                    <p>Click when you know</p>
                    <p><em>Who Said It</em></p>
                </button>
                <img className='simpsons-family' alt='Simpsons-family' src='pnghost_simpson-family-bankgrap-the-simpsons-opening-sequence-homer-the-great-television.png' />
            </section>
        )
    } else if(game && round) {
        gamePlay = (
            <section className='quote-body'>
                {displayQuote}
                <div className='character-name'>
                    <p>{!round ? 'Loading...' : `It's ${round.character}!`}</p>
                </div>
                <img className='simpsons-character' alt='Simpsons-character' src={round.image} />
                <p className='guess'>Is this who you guessed?</p>
                <div className='game-choice'>
                    <NavLink to='/woohoo'>
                        <button className='woohoo-button'>Woohoo!</button>
                    </NavLink>         
                    <NavLink to='/doh'>
                        <button className='doh-button'>D'oh!</button>
                    </NavLink>
                </div>
            </section>
        )
    } else {
        {err ? gamePlay=(
            <section className='quote-body'>    
                <div className='error-msg'>
                    <p>We're having technical difficulties...</p>
                </div>                                                                                                          
            </section>
        ) : gamePlay= (
            <section className='quote-body'>
                {displayQuote}
            </section>
        )
     }  
    }    
    
    return (
        <section className='body-container'>
            {gamePlay}
        </section>       
    )
}

export default Game;