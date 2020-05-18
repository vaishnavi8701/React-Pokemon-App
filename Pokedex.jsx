import React from 'react';
import { Searchbox } from '../searchbox/Searchbox';

import { Pokelist } from '../pokelist/Pokelist';
import { PokeSearchResult } from '../pokeSearchResult/PokeSearchResult';
import './pokedex.css';

export const Pokedex= ({ pokemons,handlePokeSearch,handleclick,selectedPokemon}) => {
    
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
               <Searchbox handlePokeSearch = { handlePokeSearch }/> 
                <Pokelist
                handlePokeSearch={ handlePokeSearch} 
                pokemons={ pokemons } 
                handleclick={ handleclick }/>

            </div>
            <div className="pokesearchresult-container">
                {
                    selectedPokemon
                     ? <PokeSearchResult 
                         showResult={true}
                         sprite={JSON.parse(selectedPokemon.sprites).animated}
                         id={selectedPokemon.id}
                         height={selectedPokemon.height}
                         weight={selectedPokemon.weight}
                         name={selectedPokemon.name}/>

                    : <PokeSearchResult
                         showResult={false}/>
                         

                
                }

            </div>
        </div>
    );
}