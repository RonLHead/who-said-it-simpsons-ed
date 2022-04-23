import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark as deleteIcon } from '@fortawesome/free-regular-svg-icons';
import './FavoriteQuotes.css';
import '../Game/Game.css';

const FavoriteQuotes = (props) => {
    const favoriteQuotesSet = props.favQuotes.map((quote, i)=> {
        return (
            <section key={i} className='quote'>
                <div className='top-corner'>
                    <FontAwesomeIcon icon={deleteIcon} size='lg' onClick={()=>{
                        props.deleteQuote(quote)}
                        }/>
                </div>
                <p className='quote-font'>{quote}</p>
            </section>
        )
    })
    return (
        <section className='fav-quotes-container'>
            <h2 className='fav-quotes-heading'>Favorite Quotes</h2> 
            {favoriteQuotesSet}
        </section>
        
    )
}

export default FavoriteQuotes