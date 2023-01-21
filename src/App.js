import './App.css';
import Home from './Components/Home'
//import Startships from './Components/Startships'
import Startships, { allStartShips } from './Components/Startships'
import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

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
          <Startships></Startships>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;

