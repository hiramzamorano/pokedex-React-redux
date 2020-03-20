import { fetchPokemon } from '../services/pokemons';
import { getPokemon as getPokemonFromStore } from '../store'

export function getPokemon(name) {
    return async (dispatch, getState) => {
        if (!name || typeof name !== 'string') {
            dispatch({
                type: 'FETCH_POKEMON_FAILURE',
                error: new Error('No proper pokemon name provided')
            });

            return null;
        }

        const lowerCasedName = name.toLowerCase()
        const { pokemons } = getState();

        if (pokemons[lowerCasedName]) {
            return pokemons[lowerCasedName];
        }

        try {
            const pokemon = await fetchPokemon(lowerCasedName);
            dispatch({
                type: 'FETCH_POKEMON_SUCCESS',
                pokemon
            })
            return pokemon;
        } catch (error) {
            dispatch({
                type: 'FETCH_POKEMON_FAILURE',
                error
            });

            return Promise.reject(error);
        }

    }
}

export function catchPokemon(name) {
    return (dispatch, getState) => {
        if (!name || typeof name !== 'string') {
            dispatch({
                type: 'CATCH_POKEMON_FAILURE',
                error: new Error('No proper pokemon name provided')
            });

            return null;
        }

        const lowerCasedName = name.toLowerCase()
        dispatch({ type: 'CATCH_POKEMON', name: lowerCasedName })
        return getPokemonFromStore(getState, lowerCasedName);
    }
}