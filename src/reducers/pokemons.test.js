import { values, encounteredPokemon } from './pokemons';

describe('pokemons reducer', () => {
    describe('values', () => {
        it('should return the initial state', () => {
            expect(values(undefined, {})).toEqual({});
        })

        it('should handle FETCH_POKEMON_SUCCESS', () => {
            const action = {
                type: 'FETCH_POKEMON_SUCCESS',
                pokemon: {
                    name: 'gastly'
                }
            }

            expect(values({}, action)).toEqual({ gastly: action.pokemon })
        })

        it('should handle CATCH_POKEMON', () => {
            const initialState = {
                gastly: { name: 'gastly' }
            };

            const action = {
                type: 'CATCH_POKEMON',
                name: 'gastly'
            };

            expect(values(initialState, action)).toEqual({
                gastly: { name: 'gastly', isCaught: true }
            });
        })
    })

    describe('encounteredPokemon', () => {
        it('should return the initial state', () => {
            expect(encounteredPokemon(undefined, {})).toEqual(null);
        });

        it('should handle FETCH_POKEMON_SUCCESS', () => {
            const action = {
                type: 'FETCH_POKEMON_SUCCESS',
                pokemon: {
                    name: 'gastly'
                }
            }

            expect(encounteredPokemon({}, action)).toEqual({ name: 'gastly' })
        })

        it('should handle FETCH_POKEMON_FAILURE', () => {
            const action = { type: 'FETCH_POKEMON_FAILURE' }
            expect(encounteredPokemon({}, action)).toEqual(null)
        })

        it('should handle CATCH_POKEMON', () => {
            const action = { type: 'CATCH_POKEMON' }
            expect(encounteredPokemon({}, action)).toEqual(null)
        })
    })
})