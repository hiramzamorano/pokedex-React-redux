import { combineReducers } from 'redux';

export function values(state = {}, action) {
    switch (action.type) {
        case 'FETCH_POKEMON_SUCCESS': {
            const { pokemon } = action;
            if (!pokemon) return state;

            const newState = Object.assign({}, state);
            newState[pokemon.name] = pokemon;
            return newState;
        }
        case 'CATCH_POKEMON': {
            const { name } = action;
            if (!name || !state[name]) return state;

            const newState = Object.assign({}, state);
            newState[name].isCaught = true;
            return newState;
        }
        default: return state;
    }
}

export function encounteredPokemon(state = null, action) {
    switch (action.type) {
        case 'FETCH_POKEMON_SUCCESS': {
            const { pokemon } = action;
            if (!pokemon) return state;

            return Object.assign({}, pokemon);
        }
        case 'FETCH_POKEMON_FAILURE': {
            return null;
        }
        case 'CATCH_POKEMON': {
            return null;
        }
        default: return state;
    }
}

export default combineReducers({ values, encounteredPokemon });