import React from 'react';

import './pokeSearchResult.css';

export const PokeSearchResult = ({showResult,name,sprite,id,height,weight}) => {
    return(
        <div className="poke-result-card">
            {

              showResult
                ?<div>
                   <img className="pokemon-animated-sprite" alt="pokemon" src={sprite}/>
                   <p>Id: {id}</p>
                   <p>Name: {name}</p>
                   <p>Height: {height}</p>
                   <p>Weight: {weight}</p>
                 </div>
               :<h2>Welcome to Pokemon</h2>
            }


        </div>
    )
}