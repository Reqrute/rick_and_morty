import React from "react";
import { useDispatch } from 'react-redux';
import {useSide} from "../../Constants/useSide"
import { setSearch , setPageNumber} from "../../store/slices/sideSlice";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const {search} = useSide();
  let searchBtn = (e) => {
    e.preventDefault();
  };
    function clean () {
      return search === '' ? search.toLowerCase() : search.toLowerCase() ; 
    }
  return (
    <form
      className={`search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          dispatch(setPageNumber({
          pageNumber : 1
          }));
          dispatch(setSearch({
            search : e.target.value.toUpperCase()
          }));
        }}
        placeholder="Search for characters"
        className="input"
        type="text"
        value={clean()}
      />
      <button
        onClick={searchBtn}
        className={`btna btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;