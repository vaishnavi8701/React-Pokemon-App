import React from 'react';


import './pokecard.css';

export const Pokecard= ({ id, name ,sprite , handleclick }) => {
     return(
        <div className="pokecard" onClick={() => handleclick(name)}>
            {
                id <= 900
                   ? <img className="pokemon-sprite" alt="pokemon" src={sprite} />
                   : null
            }
           
           
            <p>{name}</p>
           
        </div>
    )
}