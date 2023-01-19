import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Startships from './Components/Startships'
import React, { useEffect, useState } from 'react';


function App() {


  return (
    <div className='bg-dark'>
      <header className="container text-center mt-3">
        <div className="row align-self-center">
          <div className="col-12 align-self-center m-3 text-white">Star Wars</div>
        </div>
      </header>
      <body className='bg-dark'>
        <div className="container mt-3">
          <Home></Home>
          <Startships></Startships>
        </div>
      </body>

    </div>
  );
}

export default App;

