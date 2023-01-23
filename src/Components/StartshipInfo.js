import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Startships from './Startships'
import {oneShip} from './Logic'

const StartshipInfo = () => {

    const [ship, setShip] = useState('')
    const params = useParams()

    useEffect(() => {
        oneShip(params.id, setShip)
    }, [])



return (
   
    <div className="container text-white">
        <h5 className="text-uppercase mx-auto text-center mt-4"></h5>
        {/* <p>Nombre: {ship.name}</p> */}
         <p>Modelo: {ship.model}</p>
    </div>
    
)
}

export default StartshipInfo;