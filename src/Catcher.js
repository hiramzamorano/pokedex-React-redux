import React from 'react';
import { connect } from 'react-redux';
import { getPokemon, catchPokemon } from './actions/pokemon';
import { getEncounteredPokemon } from './store';
import {
    Button,
    Form,
    Header,
    Input
} from 'semantic-ui-react';

class Catcher extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
            succesfulFind: false
        }

        this.onPokemonInputChange = this.onPokemonInputChange.bind(this);
        this.onSearchPokemon = this.onSearchPokemon.bind(this);
        this.onCatchPokemon = this.onCatchPokemon.bind(this);
    }

    onPokemonInputChange(event) {
        this.setState({ search: event.target.value })
    }

    onSearchPokemon() {
        const { search } = this.state;
        this.props.getPokemon(search)
            .then(() => this.setState({ succesfulFind: true }))
            .catch(() => this.setState({ succesfulFind: false }))
    }

    onCatchPokemon() {
        const { encounteredPokemon, catchPokemon } = this.props;
        if (!encounteredPokemon) return;
        catchPokemon(encounteredPokemon.name);
        this.setState({ search: '', succesfulFind: false })
    }

    render() {
        const { search, succesfulFind } = this.state;
        const { encounteredPokemon } = this.props;

        return (
            <React.Fragment>
                <Header as="h2">Catch a Pokemon</Header>
                <Form>
                    <Form.Field>
                        <Input
                            action={{ content: 'Search', onClick: this.onSearchPokemon }}
                            placeholder="Search pokemon..."
                            onChange={this.onPokemonInputChange}
                            value={search}
                        />
                    </Form.Field>
                    { encounteredPokemon && (
                        <div>
                            <img src={encounteredPokemon.sprites.front_default}/>
                        </div>
                    )}
                    <Button onClick={this.onCatchPokemon} primary disabled={!succesfulFind}>Catch!</Button>
                </Form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    encounteredPokemon: getEncounteredPokemon(state)
});

const mapDispatchToProps = { getPokemon, catchPokemon };

export default connect(mapStateToProps, mapDispatchToProps)(Catcher)