import { useEffect, useState } from 'react';
import { allStartShips } from './Logic';
import {Link} from 'react-router-dom'

function Startships() {

    const [startships, setStartships ] = useState(null)
    const [url, setUrl] = useState('')
    const [id, setId] = useState('')

  useEffect(() => {
    allStartShips(setStartships)
  }, [])

  useEffect(() => {

    url.length === 34 ? setId(url.slice(-2, -1)) : setId(url.slice(-3, -1))
    console.log(url)
    console.log(id)

  }, [url, id])
  
  

  return (
    
        <div className="container">
            <div className="row ">
                <div className="col-12 text-center">
                    {startships != null ? (startships.map(startship => (
                    <div className="card text-start bg-secondary m-3" key={startship.name}>
                        <div className="card-body p-1 " >
                            <Link to={`/starships/${id}`} className="text-uppercase text-white mb-0" onClick={() => setUrl(startship.url)}> 
                            {startship.name} 
                            </Link>
                            <p className="mb-0 ">{startship.model}</p>
                            {/* <p>{startship.url}</p> */}
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
