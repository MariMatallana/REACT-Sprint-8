import { useEffect, useState, useContext } from 'react';
import { allStartShips } from './Logic';
import { Link } from 'react-router-dom'
import { DataContext } from './Aplication/DataContext'
import Pagination from './Pagination';

function Startships() {

  const { startships, setUrl, allStartShips } = useContext(DataContext)


  useEffect(() => {
    allStartShips()
    // pages()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            {startships != null ? (startships.map(startship => (
              <div className="card text-start bg-secondary m-3" key={startship.name}>
                <div className="card-body p-1 " >
                  <Link to={`/starshipsInfo`} className="text-uppercase text-white mb-0" onClick={() => setUrl(startship.url)}>
                    {startship.name}
                  </Link>
                  <p className="mb-0 ">{startship.model}</p>
                </div>
              </div>
            ))) : (<div className="spinner-border text-warning text-center" role="status">
            </div>)}
          </div>
        </div>
        <div className='row text-center'>
          <Pagination/>
        </div>
      </div>
    </>
  )
}

export default Startships;
