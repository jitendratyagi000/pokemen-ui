import { useSelector, useDispatch } from "react-redux";

import {
  pokemonSelector,
  saveSortedList,
  savePerPageItem,
  fetchList,
  searchPokemon
} from "../slices/pokemonSlice";

import PokemonList from "../components/PokemonList/PokemonList";
import Search from "../components/Search/Search";
import Pagiantion from "../components/Pagination/Pagination";
import ItemsPerPage from "../components/ItemsPerPage/ItemsPerPage";
import SortBy from "../components/SortBy/SortBy";

const Home = () => {
  const { sortBy, list, perPageItem, prev, next, searchQuery } =
    useSelector(pokemonSelector);
  const dispatch = useDispatch();

  const sortHandler = (key) => {
    dispatch(saveSortedList({ key, sortBy, list }));
  };

  const perPageChangeHandler = (pageCount) => {
    console.log(pageCount);
    dispatch(savePerPageItem(pageCount));
    dispatch(fetchList());
  };

  const pageChangeHandler = (apiurl) => {
    dispatch(fetchList(apiurl));
  };

  const searchHandler = (searchQuery) => {
    dispatch(searchPokemon({searchQuery, list}));
  };
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <Search value={searchQuery} changeHandler={searchHandler} />
        <div className="row">
          <div className="col">
            <SortBy sortBy={sortBy} handleClick={sortHandler} />
          </div>
          <div className="col">
            <ItemsPerPage
              perPageItem={perPageItem}
              handleChange={perPageChangeHandler}
            />
          </div>
          <div className="col d-flex justify-content-md-end">
            <Pagiantion
              prev={prev}
              next={next}
              handleChange={pageChangeHandler}
            />
          </div>
        </div>
        <PokemonList />
        <div className="d-flex justify-content-md-end">
          <Pagiantion
            prev={prev}
            next={next}
            handleChange={pageChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
