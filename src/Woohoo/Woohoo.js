import React from 'react';
import { NavLink } from 'react-router-dom';

const Woohoo = (props) => {
    return (
        <section>
            <h3>Woohoo!</h3>
            <h4>+1</h4>
            <NavLink to='/home'>
                <button onClick={()=>{
                    props.updateWoohooScore();
                }}>Play again!</button>
            </NavLink>
        </section>
    )
}

export default Woohoo;