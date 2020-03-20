import React from 'react';
import { Grid, Header, Container, Segment } from 'semantic-ui-react';
import Catcher from './Catcher';
import CaughtPokemons from './CaughtPokemons';
import { Provider } from 'react-redux';
import store from './store';


function PokeCatcher() {
  return (
      <Provider store={store}>
        <Grid>
          <Grid.Column width="16" className="app-container">
            <Header as="h1" className="poke-header">
              PokeCatcher
            </Header>

            <Container>
              <Segment>
                <Catcher/>
              </Segment>
              <Segment>
                <CaughtPokemons/>
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </Provider>
  );
}

export default PokeCatcher;