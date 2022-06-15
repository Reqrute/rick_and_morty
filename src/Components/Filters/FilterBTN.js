import React from "react";
import { useDispatch } from 'react-redux';
import { setGender, setStatus, setSpecies, setPageNumber } from "../../store/slices/sideSlice";

const FilterBTN = ({ input, index, name }) => {

  const dispatch  = useDispatch();

  function handleSwitch (name, input , page) {
    switch (name)
    {
      case "gender" : 
      return  dispatch(setGender({
          gender : input,
        }),
        setPageNumber({
          pageNumber: page
    }));

       case "status": 
       return dispatch(setStatus({
        status : input,
      }),
      setPageNumber({
        pageNumber: page
  }));

      case "species" :
      dispatch(setSpecies({
          species : input,
        }),
        setPageNumber({
          pageNumber: page
    }));
        break;
      default: return null;
    }
  }

  return (
    <div>
      <style>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            handleSwitch(name, input , 1)
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};



export default FilterBTN;