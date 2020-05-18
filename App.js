import React, { Component } from 'react';
import { Pokedex } from './pokedex/Pokedex';

import { pokemonData } from './../src/data/pokemonData';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            pokemons: [],
            selectedPokemon: null,

        }

    }

    componentDidMount() {
        this.setState({ pokemons: pokemonData });

    }

    handlePokeSearch = (searchValue) => {
        this.setState({ searchField: searchValue });
    }

    handleclick = (name => {
        const { pokemons } = this.state;
        let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
        this.setState({ selectedPokemon });
    })


    render() {
        const { pokemons, searchField } = this.state;
        let serrchedPokemons = pokemons.filter(pokemon => {
            return pokemon.name ?
                pokemon.name.toLowerCase().includes(searchField.toLowerCase()) :
                false
        })
        return ( <
            div className = "App" >
            <
            h1 > Pokemon < /h1> <
            Pokedex handlePokeSearch = { this.handlePokeSearch }
            pokemons = { serrchedPokemons }
            handleclick = { this.handleclick }
            selectedPokemon = { this.state.selectedPokemon }
            /> < /
            div >
        );
    }
}

export default App;