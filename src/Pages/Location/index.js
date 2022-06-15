import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Card";
import { useDispatch } from "react-redux";
import InputGroup from "../../Components/Filters/category/InputGroup";
import { useLocation } from "../../Constants/useLocation";
import { setInfo, setResults } from "../../store/slices/locationSlice";

const Location = () => {
  const dispatch = useDispatch(); 
  const {dimension, type, name, result} = useLocation();
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      dispatch(setInfo({
        dimension: data.dimension,
        type : data.dimension,
        name: data.name,
      }));

      let a = await Promise.all(
        data.residents.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      dispatch(setResults({
       result : a,
      }));
    })();
  }, [api,dispatch]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card result={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;