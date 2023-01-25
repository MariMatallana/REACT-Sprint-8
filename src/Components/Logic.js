import axios from 'axios'
import { DataContext } from './Aplication/DataContext'
import { useContext } from 'react';



// const allStartShips = async (state) => {
//     const peticion = await axios.get('https://swapi.dev/api/starships/')
//     state(peticion.data.results)
    
// }

// export {
//     allStartShips,
// }

// // let nextPagination 
// // let prevPagination  

// function AllStartShips() {
//     console.log('estamos en logic')
//     const { pagination, setPagination } = useContext(DataContext)

//     const allStartShips = async (state) => {
//         const peticion = await axios.get('https://swapi.dev/api/starships')
//         state(peticion.data.results)
//         setPagination(peticion.data)
//         console.log(pagination)
//         // nextPagination = peticion.data.next
//         // prevPagination = peticion.data.previous
//         //    console.log(nextPagination)
//         //    console.log(prevPagination)
//     }
//     return (
//         allStartShips
//     )

// // }

// export default AllStartShips;