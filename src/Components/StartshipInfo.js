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
        <h5 className="text-uppercase mx-auto text-center mt-4">{ship.name}</h5>
        <br></br>
        <p className="text-uppercase mx-auto text-center">FOTO</p>
         <p className="text-uppercase mx-auto text-center"> <b>Modelo: </b>{ship.model}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Starships Class: </b>{ship.starship_class}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Manufacturer: </b>{ship.manufacturer}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Cost: </b>{ship.cost_in_credits} credits</p>
         <p className="text-uppercase mx-auto text-center"> <b>Crew: </b>{ship.crew}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Passengers capacity: </b>{ship.passengers}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Cargo capacity: </b>{ship.cargo_capacity} tons</p>
         <p className="text-uppercase mx-auto text-center"> <b>Consumables: </b>{ship.consumables} months</p>
         <p className="text-uppercase mx-auto text-center"> <b>Length: </b>{ship.length} meters</p>
         <p className="text-uppercase mx-auto text-center"> <b>Maximun atmospherering speed: </b>{ship.max_atmosphering_speed} km/h</p>
         <p className="text-uppercase mx-auto text-center"> <b>Hyperdrive rating: </b>{ship.hyperdrive_rating}</p>
         <p className="text-uppercase mx-auto text-center"> <b>Maximun speed in realspace: </b>{ship.MGLT} mglt</p>
    </div>
    
)
}

export default StartshipInfo;