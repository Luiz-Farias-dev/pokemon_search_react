import * as C from './App.styles';
import { useState } from 'react';
import Axios from 'axios';

function App(){
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
      name: "",
      species: "",
      img: "",
      hp: "",
      attack: "",
      defense: "",
      type: ""
  });
 const searchPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>{
    setPokemon({
      name: pokemonName,
      species: response.data.species.name,
      img: response.data.sprites.front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      type: response.data.types[0].type.name
    });
    setPokemonChosen(true);
  })
 };

  return (
    <C.Container>
      <C.TitleSection>
        <h1>Pokemon Stats</h1>
        <C.Input type='text' onChange={e => setPokemonName(e.target.value)}></C.Input>
        <C.Button onClick={searchPokemon}>Search</C.Button>
      </C.TitleSection>
      <C.DisplaySection>
        {!pokemonChosen ? (
        <h1>Please choose a Pokemon before search.</h1>
        ) : (
        <>
          <h1 className='nome'>{pokemon.name}</h1>
          <C.PokemonImage src={pokemon.img}/>
          <h5 className='species'>Species: {pokemon.species}</h5>
          <h5 className='type'>Type: {pokemon.type}</h5>
          <h5 className='hp'> Hp: {pokemon.hp}</h5>
          <h5 className='attack'>Attack: {pokemon.attack}</h5>
          <h5 className='defense'>Defense: {pokemon.defense}</h5>
        </>
        )}
        </C.DisplaySection>
    </C.Container>
  );
}

export default App;