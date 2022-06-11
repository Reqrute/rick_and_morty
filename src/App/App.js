import { Routes, Route } from 'react-router-dom'
import Characters from '../Pages/Characters';
import Autorization from '../ClientAuth/Autorization/Autorization';
import Registration from '../ClientAuth/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route exact path="/" element = {<Characters/>} />
      <Route exact path="/login" element = {<Autorization/>} />
      <Route exact path="/register" element = {<Registration/>} />
    </Routes>
  );
}

export default App;
