import { useEffect, useState } from 'react';
import { allStartShips } from './Startships-Logic';


function Startships() {

    const [startships, setStartships ] = useState(null)

  useEffect(() => {
    allStartShips(setStartships)
  }, [])

  return (
    <>
        <div className="container">
            <div className="row ">
                <div className="col-12 ">
                    {startships != null ? (startships.map(startship => (
                    <div className="card text-start bg-secondary m-3" key={startship.id}>
                        <div className="card-body p-1 " >
                            <h6 className="text-uppercase  mb-0">{startship.name} </h6>
                            <p className="mb-0 ">{startship.model}</p>
                        </div>
                    </div>
                    ))) : ('Cargando...')}
                </div>
            </div>
        </div>
    </>
  )
}

export default Startships;
