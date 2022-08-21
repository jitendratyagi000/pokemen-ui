import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pokemonSelector,
  saveSortedList,
  savePerPageItem,
  fetchList,
  saveSearchQuery,
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
    dispatch(savePerPageItem(pageCount));
    dispatch(fetchList());
  };

  const pageChangeHandler = (apiurl) => {
    dispatch(fetchList(apiurl));
  };

  const searchHandler = (query) => {
    dispatch(saveSearchQuery(query));
  };
  return (
    <div className="py-3 bg-light">
      <div className="container">
        <Search value={searchQuery} changeHandler={searchHandler} />
        <div className="row">
          <div className="col-lg-4 col-12 d-flex justify-content-end justify-content-lg-start">
            <SortBy sortBy={sortBy} handleClick={sortHandler} />
          </div>
          <div className="col-lg-4 col-12-4 mt-2 mt-lg-0">
            <ItemsPerPage
              perPageItem={perPageItem}
              handleChange={perPageChangeHandler}
            />
          </div>
          <div className="col-lg-4 mt-2 mt-lg-0 col-12 d-flex justify-content-end">
            <Pagiantion
              prev={prev}
              next={next}
              handleChange={pageChangeHandler}
            />
          </div>
        </div>
        <PokemonList />
        <div className="d-flex justify-content-end mt-2">
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
