import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Startships from './Components/Startships'
import React, { useEffect, useState } from 'react';


function App() {


  return (
    <>
      <div className="container text-center mt-3">
        <div className="row align-self-center">
          <header className="col-12 align-self-center m-3">Star Wars</header>
        </div>
      </div>
      <div>
        <div className="container mt-3">
          <Home></Home>
          <Startships></Startships>
        </div>
      </div>
    </>
  );
}

export default App;

