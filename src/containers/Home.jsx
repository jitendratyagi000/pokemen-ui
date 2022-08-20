import PokemonList from "../components/PokemonList/PokemonList";
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <div class="py-5 bg-light">
      <div class="container">
        <Search />
        <PokemonList />
      </div>
    </div>
  );
};

export default Home;
