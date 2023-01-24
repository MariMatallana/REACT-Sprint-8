import axios from 'axios'
import {useContext} from 'react';


const allStartShips = async (state) => {
    const peticion = await axios.get('https://swapi.dev/api/starships/')
    state(peticion.data.results)
}

const oneShip = async (id, state) => {
    const peticion = await axios.get(`https://swapi.dev/api/starships/${id}`)
    state(peticion.data)
}

// const shipPicture = async (id, state) => {
//     const peticion = await axios.get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
//     state(peticion)
//     console.log('Estamos' + shipPicture)
   
// }

export {
    allStartShips,
    oneShip,
    // shipPicture
}