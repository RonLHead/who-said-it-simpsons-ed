import React from 'react';
import { NavLink } from 'react-router-dom';
import './Woohoo.css';

const Woohoo = (props) => {
    return (
        <section className='woohoo-container'>
            <div className='woohoo-heading'>
                <h3>Woohoo!</h3>
                <h3>+1</h3>
            </div>
            <NavLink to='/home'>
                <button className='play-again-container' onClick={()=>{
                    props.updateWoohooScore();
                }}>Play again!</button>
            </NavLink>
        </section>
    )
}

export default Woohoo;