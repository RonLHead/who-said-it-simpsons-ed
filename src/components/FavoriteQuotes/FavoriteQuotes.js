import React from 'react';
import './FavoriteQuotes.css';

const FavoriteQuotes = (props) => {
    console.log(props)
    const favoriteQuotesSet = props.favQuotes.map((quote, i)=> {
        return (
            <div key={i}>
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