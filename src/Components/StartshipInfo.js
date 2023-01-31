import React, { useEffect, useContext } from 'react'
import { DataContext } from './Aplication/DataContext'

const StartshipInfo = () => {

    const { ship, url, oneShip, itsLogged, setItsLogged } = useContext(DataContext)

    useEffect(() => {
        oneShip(url)
    }, [])

    let id
    url.length === 34 ? id = url.slice(-2, -1) : id = url.slice(-3, -1)

    let picture = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`


    return (
        <> {
            itsLogged ?

                <div className="container-flex text-white">
                    <div className="row">
                        <div className="text-center">
                            <h5 className="text-uppercase mx-auto text-center mt-4 ">{ship.name}</h5>
                            <br></br>
                            <img className="col-md-6 col-sm-12 border-bottom border-warning " src={picture}></img>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Modelo: </b>{ship.model}</p>
                            <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Starships Class: </b>{ship.starship_class}</p>
                            <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Manufacturer: </b>{ship.manufacturer}</p>
                            <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Cost: </b>{ship.cost_in_credits} credits</p>
                        </div>
                        <div className="row mt-3 text-right">
                            <div className="col-md-6 ">
                                <p className="text-uppercase mx-auto text-center mb-0 "> <b className="text-warning">Crew: </b>{ship.crew}</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Passengers capacity: </b>{ship.passengers}</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Cargo capacity: </b>{ship.cargo_capacity} tons</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Consumables: </b>{ship.consumables} months</p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Length: </b>{ship.length} meters</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Maximun atmospherering speed: </b>{ship.max_atmosphering_speed} km/h</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Hyperdrive rating: </b>{ship.hyperdrive_rating}</p>
                                <p className="text-uppercase mx-auto text-center mb-0"> <b className="text-warning">Maximun speed in realspace: </b>{ship.MGLT} mglt</p>
                            </div>
                        </div>
                    </div>
                </div> :

                <div>
                    <br></br>
                    <h4 className="col-12 mb-3 text-center">
                        Debes iniciar sesión
                    </h4>
                </div>
        }
        </>
    )
}

export default StartshipInfo;