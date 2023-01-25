import { createContext, useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [startships, setStartships] = useState(null)
    const [url, setUrl] = useState('')
    const [ship, setShip] = useState('')
    const [pagination, setPagination] = useState('')

    const oneShip = async (url) => {
        let peticion = await axios.get(`${url}`)
        peticion = peticion.data
        setShip(peticion)
    }

  
        const allStartShips = async () => {
            const peticion = await axios.get('https://swapi.dev/api/starships/')
            setStartships(peticion.data.results)
            setPagination(peticion.data.next)
            console.log(pagination)
            console.log(startships)
        }
     
        // const pages = async () => {
        //     const peticion = await axios.get('https://swapi.dev/api/starships/')
        //     setPagination(peticion.data)
        //     console.log(pagination)
        // }

    

    // const allStartShips = async () => {
    //     const peticion = await axios.get('https://swapi.dev/api/starships/')
    //     setTodasLasNaves(peticion.data.results)
        
    // }
    

    return (

        <DataContext.Provider value={{

            startships,
            setStartships,
            url,
            setUrl,
            ship,
            setShip,
            oneShip,
            pagination, 
            setPagination,
            allStartShips
        }}>
            {children}
        </DataContext.Provider>
    )
}
