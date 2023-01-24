import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { oneShip } from './Logic'
import { DataContext } from './Aplication/DataContext'

const StartshipInfo = () => {

    const { picture, ship, setShip } = useContext(DataContext)
    const params = useParams()

    useEffect(() => {
        oneShip(params.id, setShip)
    }, [])

    return (

        <div className="container-flex text-white">
            <div className="row">
                <div className="text-center">
                    <h5 className="text-uppercase mx-auto text-center mt-4">{ship.name}</h5>
                    <br></br>
                    <img className="col-md-6 col-sm-12" src={picture}></img>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <p className="text-uppercase mx-auto text-center mb-0"> <b>Modelo: </b>{ship.model}</p>
                    <p className="text-uppercase mx-auto text-center mb-0"> <b>Starships Class: </b>{ship.starship_class}</p>
                    <p className="text-uppercase mx-auto text-center mb-0"> <b>Manufacturer: </b>{ship.manufacturer}</p>
                    <p className="text-uppercase mx-auto text-center mb-0"> <b>Cost: </b>{ship.cost_in_credits} credits</p>
                </div>
                <div className="row mt-4 text-right">
                    <div className="col-md-6">
                    <p className="text-uppercase mx-auto mb-0 "> <b>Crew: </b>{ship.crew}</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Passengers capacity: </b>{ship.passengers}</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Cargo capacity: </b>{ship.cargo_capacity} tons</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Consumables: </b>{ship.consumables} months</p>
                    </div>
                    <div className="col-md-6">
                    <p className="text-uppercase mx-auto mb-0"> <b>Length: </b>{ship.length} meters</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Maximun atmospherering speed: </b>{ship.max_atmosphering_speed} km/h</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Hyperdrive rating: </b>{ship.hyperdrive_rating}</p>
                <p className="text-uppercase mx-auto mb-0"> <b>Maximun speed in realspace: </b>{ship.MGLT} mglt</p>
                    </div>
                </div>
                  </div>
        </div>

    )
}

export default StartshipInfo;