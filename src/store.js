import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import _ from 'lodash';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export const getPokemon = (state, name) => _.get(state, `pokemons.${name}`);
export const getCaughtPokemons = (state) => Object.values(state.pokemons.values).filter(pokemon => pokemon.isCaught)
export const getEncounteredPokemon = (state) => state.pokemons.encounteredPokemon;