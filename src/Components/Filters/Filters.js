import React from "react";
import { useDispatch } from "react-redux";
import { removeFilters } from "../../store/slices/sideSlice";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import { useSide } from "../../Constants/useSide";

const Filter = () => {
  const dispatch = useDispatch();
  const {isFiltered} = useSide();

  let clear = () => {
    dispatch(removeFilters());
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
     {isFiltered ? (<div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-center mb-3"
      >
        Clear Filters
      </div>) : null} 
      <div className="accordion" id="accordionExample">
        <Status/>
        <Species/>
        <Gender/>
      </div>
    </div>
  );
};

export default Filter;