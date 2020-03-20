import React from 'react';
import {
    Button,
    Form,
    Header
} from 'semantic-ui-react';

export default class Catcher extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header as="h2">Catch a Pokemon</Header>
                <Form>
                    <Form.Field>
                        <label>Pokemon name</label>
                        <input type="text"/>
                    </Form.Field>
                    <Button type='submit'>Catch!</Button>
                </Form>
            </React.Fragment>
        );
    }
}