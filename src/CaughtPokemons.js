import React from 'react';
import {
    Header,
    Item
} from 'semantic-ui-react';

export default class CaughtPokemons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header as="h2">Caught Pokemons</Header>
                <Item.Group>
                    <Item>
                        <Item.Image size='small' src={`https://api.adorable.io/avatars/80/pikachu.png`} />
                        <Item.Content>
                            <Item.Header>Pikachu</Item.Header>
                            <Item.Description>Electric type</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </React.Fragment>
        );
    }
}