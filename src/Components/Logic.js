import axios from 'axios'
import startships from './Startships'


const allStartShips = async (state) => {
    const peticion = await axios.get('https://swapi.dev/api/starships/')
    console.log(peticion.data.results)
    state(peticion.data.results)
}



export {
    allStartShips,
}