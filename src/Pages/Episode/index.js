import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Card";
import InputGroup from "../../Components/Filters/category/InputGroup";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

return (
    <div className="container">
      <div className="row mb-3">
        <h1 style={{color : "white"}} className="text-center mb-3">
          Episode name :{" "}
          <span style={{color : "white"}} className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 style={{color : "white"}} className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 style={{color : "white"}} className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
        <div className="row py-3 mb-5 cardss">
            <Card page ={"Episode"} result={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;