import './App.css';
import Home from './Components/Home'
import Startships, { allStartShips } from './Components/Startships'
import React from 'react';
import starwars from './Images/starwars.jpeg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import StartshipInfo from './Components/StartshipInfo';

function App() {

  return (
    <Router>
      
        <nav className="navbar fixed-top navbar-expand-lg bg-white p-0 ">
          <div className="container-fluid bg-dark aling-center">
                <div className="navbar-brand mx-auto " href="#">
                  <img className="p-2 " src={starwars} width='120px'></img>
                </div>
          </div>
        </nav>
        <div className="bg-dark">
        <div className='bg-dark'>
          <header className="container text-center mt-5">
            <div className="row align-self-center">
              <div className="col-12 align-self-center m-3 text-white"></div>
              <div>
                <Link to="/" className='btn btn-warning m-1 btn-sm'>
                  Home
                </Link>
                <Link to="/starships" className='btn btn-warning m-1  btn-sm'>
                  Starships
                </Link>
              </div>
            </div>
          </header>
          <div className='bg-dark text-white'>
            <div className="container mt-3">
              <Routes>
                <Route path='/starships' element={<Startships />}></Route>
                <Route path='/starships/:id' element={<StartshipInfo />}>  </Route>
                <Route path='/' element={<Home />}></Route>
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </Router>

  );
}

export default App;

