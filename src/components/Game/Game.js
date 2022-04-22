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

    useEffect(() => {
        loadRound()
    }, [])

    const loadRound = () => {
        getSimpsonsData()
            .then(data => {
                return setRound(data[0])
            })
    }

    

    let displayQuote;
    
    if(!favorite) {
        displayQuote = 
            <div className='quote'>
                <div className='top-corner'>
                    <FontAwesomeIcon  icon={heartOutline} onClick={()=>{
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
                    <FontAwesomeIcon icon={checkedIcon}/>
                </div>
                <p className='quote-font'>{!round ? 'Loading...' : round.quote}</p>
            </div>
            

        }


    

    let gamePlay;
    
    if(!game) {
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
    } else if(game) {
        gamePlay = (
            <section className='quote-body'>
                {displayQuote}
                <div>
                    <p>{!round ? 'Loading...' : `It was ${round.character}!`}</p>
                </div>
                <img className='simpsons-family' alt='Simpsons-character' src={round.image} />
                <p>Is this who you guessed?</p>
                <div>
                    <NavLink to='/woohoo'>
                        <button>Woohoo!</button>
                    </NavLink>         
                    <NavLink to='/doh'>
                        <button>D'oh!</button>
                    </NavLink>
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