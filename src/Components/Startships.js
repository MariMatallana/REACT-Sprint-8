import { useEffect, useState } from 'react';
import { allStartShips } from './Logic';
import {Link} from 'react-router-dom'

function Startships() {

    const [startships, setStartships ] = useState(null)
   // const [id, setId] = useState('')

  useEffect(() => {
    allStartShips(setStartships)
  }, [])

  return (
    
        <div className="container">
            <div className="row ">
                <div className="col-12 text-center">
                    {startships != null ? (startships.map(startship => (
                    <div className="card text-start bg-secondary m-3" key={startship.name}>
                        <div className="card-body p-1 " >
                            <a href={`/starships/${startship.name}`} className="text-uppercase text-white mb-0" > 
                            {startship.name} 
                            </a>
                            <p className="mb-0 ">{startship.model}</p>
                        </div>
                    </div>
                    ))) : (<div className="spinner-border text-warning text-center" role="status">
                  </div>)}
                </div>
            </div>
        </div>
    
  )
}

export default Startships;
