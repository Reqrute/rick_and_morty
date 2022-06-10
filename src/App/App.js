import { Routes, Route } from 'react-router-dom'
import Characters from '../Pages/Characters';

function App() {
  return (
    <Routes>
      <Route exact path="/" component= {<Characters/>} />
    </Routes>
  );
}

export default App;
