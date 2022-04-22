import React from 'react';
import { NavLink } from 'react-router-dom';

const Doh = (props) => {
    return (
        <section>
            <h3>D'oh!</h3>
            <h4>+1</h4>
            <NavLink to='/home'>
                <button onClick={()=>{
                    props.updateDohScore();
                }}>Play again!</button>
            </NavLink>
        </section>
    )
}

export default Doh;