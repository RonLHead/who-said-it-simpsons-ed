import React from 'react';
import { NavLink } from 'react-router-dom';
import './Doh.css';

const Doh = (props) => {
    return (
        <section className='doh-container'>
            <div className='doh-heading'>
                <h3>D'oh!</h3>
                <h3>+1</h3>
            </div>
            <NavLink to='/home'>
                <button className='play-again-container' onClick={()=>{
                    props.updateDohScore();
                }}>Play again!</button>
            </NavLink>
        </section>
    )
}

export default Doh;