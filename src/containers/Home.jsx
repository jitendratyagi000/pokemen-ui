import PokemonList from "../components/PokemonList/PokemonList";
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <Search />
        <PokemonList />
      </div>
    </div>
  );
};

export default Home;
