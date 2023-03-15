import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import List from './List';

function App() {
  return (

    <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/list" element={<List/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
