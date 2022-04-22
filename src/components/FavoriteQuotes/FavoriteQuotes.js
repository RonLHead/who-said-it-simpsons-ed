import React from 'react';
import { Route } from 'react-router-dom'
import './FavoriteQuotes.css';

const FavoriteQuotes = () => {
    return (
        <Route exact path='/favorite-quotes'>
            <section>
                <p>Quote 1: .............</p>
                <p>Quote 2: .............</p>
                <p>Quote 3: .............</p>
                <p>Quote 4: .............</p>
            </section>
        </Route>
    )
}

export default FavoriteQuotes