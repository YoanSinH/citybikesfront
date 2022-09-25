import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Bikes } from './views/Bikes';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/b' element={<Bikes/>}/>
      </Routes>
    </div>
  );
}

export default App;
