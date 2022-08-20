import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  pokemonSelector,
  fetchList,
  setSelectedPokemon,
} from "../../slices/pokemonSlice";

import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {
  const navigate = useNavigate();
  const { list } = useSelector(pokemonSelector);
  const dispatch = useDispatch();

  const goToDetailPage = (pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
    navigate(`${pokemon.name}/detail`);
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {list.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          clickHandler={goToDetailPage}
        />
      ))}
    </div>
  );
};

export default PokemonList;
