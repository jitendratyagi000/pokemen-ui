import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { pokemonSelector, fetchRecipes } from "../../slices/pokemonSlice";

import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {
  const { list } = useSelector(pokemonSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {list.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
