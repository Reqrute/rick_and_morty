import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSide } from "../../Constants/useSide";
import Search from "../../Components/SearchBar/Search";
import Card from "../../Components/Cards/Card";
import Pagination from "../../Components/Pagination/Pagination";
import Filter from "../../Components/Filters/Filters";
import { setInit } from "../../store/slices/initSlice";
import { useInit } from "../../Constants/useInit";

const Characters = () => {
  
  let dispatch = useDispatch();
  const {search, species, gender, status, pageNumber} = useSide();
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
   
  const {result} = useInit();
  useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        dispatch(setInit({
          info : data.info,
          result : data.results, 
        }))
      })();
    }, [api, dispatch]);
   
    return (
      <div className="App">
        <h1 style={{color : "white"}} className="text-center mb-3 ">Characters</h1>
        <Search/>
        <div className="container">
          <div className="row">
            <Filter />
            <div className="col-lg-8 col-12">
            <div className="row pt-3 mb-3 cardss" >
                <Card page ={"Characters"} result={result}/>
              </div>
            </div>
          </div>
        </div>
        <Pagination/>
      </div>
    );
  };

export default Characters