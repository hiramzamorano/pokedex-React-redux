import React from 'react';
import { render } from '@testing-library/react';
import { CaughtPokemons } from './CaughtPokemons';

describe('CaughtPokemons', () => {
    it('should render a list of pokemons', () => {
        const pokemons = [
            {
                id: 132,
                name: 'ditto',
                types: [{type: {name: 'normal'}}] ,
                height: 3,
                weight: 40,
                isCaught: true,
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            },
            {
                id: 92,
                name: 'gastly',
                types: [{type: {name: 'normal'}}],
                height: 13,
                weight: 1,
                isCaught: true,
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png'
                }
            }
        ];

        const component = render(<CaughtPokemons pokemons={pokemons} />);
        expect(component).toMatchSnapshot();
    })

    it('should display no captured pokemons when pokemon list is empty', () => {
        const pokemons = [];
        const component = render(<CaughtPokemons pokemons={pokemons} />);
        expect(component.baseElement).toHaveTextContent('No pokemons captured yet');
        expect(component).toMatchSnapshot();
    })
});