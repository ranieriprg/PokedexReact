import React, { Component } from 'react';

import PokemonCard from './pokemonCard';

export default class pokemonList extends Component {
    render() {
        return (
            <div>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        )
    }
}
