import React from "react";
import { useDispatch } from 'react-redux';
import { setSearch , setPageNumber} from "../../store/slices/sideSlice";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          dispatch(setSearch({
            search : e.target.value
          }),
          setPageNumber({
            pageNumber : 1
          }))
        }}
        placeholder="Search for characters"
        className="input"
        type="text"
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