import React from 'react';
import { connect } from 'react-redux';
import { getCaughtPokemons } from './store';
import {
    Header,
    Item
} from 'semantic-ui-react';

class CaughtPokemons extends React.Component {
    render() {
        const { pokemons } = this.props;

        return (
            <React.Fragment>
                <Header as="h2">Caught Pokemons</Header>
                <Item.Group>
                    {
                        pokemons.map(pokemon => (
                            <Item key={pokemon.name}>
                                <Item.Image size='tiny' src={pokemon.sprites.front_default} />
                                <Item.Content>
                                    <Item.Header>#{pokemon.id} {pokemon.name}</Item.Header>
                                    <Item.Description>Type: {pokemon.types[0].type.name}</Item.Description>
                                    <Item.Description>Height: {pokemon.height}, Weight: {pokemon.weight}</Item.Description>
                                </Item.Content>
                            </Item>
                        ))
                    }
                </Item.Group>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: getCaughtPokemons(state)
});

export default connect(mapStateToProps)(CaughtPokemons);