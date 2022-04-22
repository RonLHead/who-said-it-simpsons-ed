import React from 'react';
import './FavoriteQuotes.css';

const FavoriteQuotes = (props) => {
    const favoriteQuotesSet = props.favQuotes.map((quote, i)=> {
        return (
            <div key={i}>
                <button onClick={()=>{
                    console.log("Index", i)
                    props.deleteQuote(quote)}
                    }>Delete quote</button>
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