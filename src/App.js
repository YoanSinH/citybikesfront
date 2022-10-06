import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Bikes } from "./views/Bikes";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/networks' element={<Bikes/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
