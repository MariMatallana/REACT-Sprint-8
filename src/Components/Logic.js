import axios from 'axios'


const allStartShips = async (state) => {
    const peticion = await axios.get('https://swapi.dev/api/starships/')
    state(peticion.data.results)
}

const oneShip = async (id, state) => {
    const peticion = await axios.get(`https://swapi.dev/api/starships/${id}`)
    state(peticion.data)
}


export {
    allStartShips,
    oneShip,
}