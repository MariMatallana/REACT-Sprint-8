import './App.css';
import Home from './Components/Home'
//import Startships from './Components/Startships'
import { allStartShips } from './Components/Startships'
import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [startships, setStartships ] = useState(null)

  useEffect(() => {
    allStartShips(setStartships)
  }, [])

  return (
    <>
    <div className='bg-dark'>
      <header className="container text-center mt-3">
        <div className="row align-self-center">
          <div className="col-12 align-self-center m-3 text-white">Star Wars</div>
        </div>
      </header>
      <div className='bg-dark text-white'>
        <div className="container mt-3">
          <Home></Home>
          {startships != null ? (startships.map(startship => (
            <div key={startship.id}>
              <h6 className="text-uppercase">{startship.name} </h6><p>{startship.model}</p>
            </div>
          ))) : ('Cargando')}
          {/* <Startships></Startships> */}
        </div>
      </div>

    </div>
    </>
  );
}

export default App;

