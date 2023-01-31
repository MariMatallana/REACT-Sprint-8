import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './Aplication/DataContext'
import Pagination from './Pagination';

function Startships() {

  const { startships, setUrl, allStartShips } = useContext(DataContext)


  useEffect(() => {
    allStartShips()
  }, [])

  return (
    <>
      <div className="container text-center">
        <div className="row text-center ">
          <div className="col-12 col-md-6 text-center mx-auto">
            {startships != null ? (startships.map(startship => (
              <div className="tarjeta card text-start m-3" key={startship.name}>
                <div className="card-body p-1" >
                  <Link to={`/starshipsInfo`} className="text-uppercase text-warning mb-0" onClick={() => setUrl(startship.url)}>
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
