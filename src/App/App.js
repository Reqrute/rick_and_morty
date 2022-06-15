import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Episodes from '../Pages/Episode';
import Location from '../Pages/Location';
import Navbar from '../Components/Header/Header';
import Characters from '../Pages/Characters';

//import Autorization from '../ClientAuth/Autorization/Autorization';
//import Registration from '../ClientAuth/Registration/Registration';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/episodes" element={<Episodes />} />
        <Route exact path="/location" element={<Location />} />
      </Routes>
    </React.Fragment>
  );
    // <Routes>
    //   <Route exact path="/" element = {<Characters/>} />
    //   <Route exact path="/login" element = {<Autorization/>} />
    //   <Route exact path="/register" element = {<Registration/>} />
    // </Routes>
  
}

export default App;
