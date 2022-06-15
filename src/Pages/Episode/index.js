import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../Components/Cards/Card";
import InputGroup from "../../Components/Filters/category/InputGroup";
import { setInfo , setResults } from "../../store/slices/episodeSlice";
import { useEpisode } from "../../Constants/useEpisode";

const Episodes = () => {
  const dispatch =  useDispatch();
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      dispatch(setInfo({
        air_date : data.air_date,
        name : data.name,
      }))

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
        dispatch(setResults({
          result : a,
        }))
    })();
  }, [api, dispatch]);

const {air_date, name ,result} = useEpisode();

  
return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
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

export default Episodes;