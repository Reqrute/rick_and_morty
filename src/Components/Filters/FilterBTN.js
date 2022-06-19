import React from "react";
import { useDispatch } from 'react-redux';
import { useSide } from "../../Constants/useSide";
import { setGender, setStatus, setSpecies, setPageNumber } from "../../store/slices/sideSlice";

const FilterBTN = ({ input, index, name }) => {

  const dispatch  = useDispatch();
  const {status, gender,species} = useSide();

  function handleBool (input, name){
    switch (name) 
    {
      case "gender":

        return  input === gender ;

        case "status":
          return  input === status;

          case "species":
            return  input === species;

        default: return false
    }
  }

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
          checked={handleBool(input, name)}
          onChange={handleBool}
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
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