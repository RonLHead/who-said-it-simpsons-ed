import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark as deleteIcon } from '@fortawesome/free-regular-svg-icons';

import './FavoriteQuotes.css';

const FavoriteQuotes = (props) => {
    const favoriteQuotesSet = props.favQuotes.map((quote, i)=> {
        return (
            <div key={i}>
                <FontAwesomeIcon icon={deleteIcon} onClick={()=>{
                    props.deleteQuote(quote)}
                    }/>
                <p>{quote}</p>
            </div>
        )
    })
    return (
        <section>
            {favoriteQuotesSet}
        </section>
        
    )
}

export default FavoriteQuotes