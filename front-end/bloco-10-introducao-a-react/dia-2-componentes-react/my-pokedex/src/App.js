import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="root">
      <h1>Pokedex</h1>
      <section>
        { pokemons.map((pokemon) => <Pokemon key={ pokemon.name } pokemon={pokemon}/>) }
      </section>
    </div>
  );
}

export default App;
