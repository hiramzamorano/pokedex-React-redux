export const fetchPokemon = async (name) => {
    let response;
    try {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    } catch (err) {
        return Promise.reject(err);
    }

    return await response.json();
}