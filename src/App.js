import React from 'react';
import { Button, Grid, Header, Container, Segment, Item, Form } from 'semantic-ui-react';
import Catcher from './Catcher';
import CaughtPokemons from './CaughtPokemons';


function App() {
  return (
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
  );
}

export default App;