import './App.scss';
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Routers>
      <Header/>
      <Routes>
       <Route path="/"  element={<Home />} />
      </Routes>
    </Routers>
      
    </div>
  );
}

export default App;

