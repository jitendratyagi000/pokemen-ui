import { useEffect, useState } from "react";
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
  const { list, loading, searchQuery } = useSelector(pokemonSelector);
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();

  const goToDetailPage = (pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
    navigate(`${pokemon.name}/detail`);
  };

  useEffect(() => {
    setFilteredList([
      ...list.filter(
        (pokemon) =>
          pokemon.name.includes(searchQuery.toLowerCase()) ||
          pokemon.abilities.some((item) =>
            item.ability.name.includes(searchQuery.toLowerCase())
          )
      ),
    ]);
    if (list.length === 0) {
      dispatch(fetchList());
    }
  }, [dispatch, list, searchQuery]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {filteredList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          clickHandler={goToDetailPage}
        />
      ))}
      {list.length === 0 && !loading && <p>No Record Found!!</p>}
    </div>
  );
};

export default PokemonList;
