import { createContext, useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [startships, setStartships] = useState(null)
    const [url, setUrl] = useState('')
    const [ship, setShip] = useState('')
    const [nextPagination, setNextPagination] = useState('')
    const [previousPagination, setPreviousPagination] = useState('')
    const [itsLogged, setItsLogged] = useState(false)


    const oneShip = async (url) => {
        let peticion = await axios.get(`${url}`)
        peticion = peticion.data
        setShip(peticion)
    }

    const allStartShips = async () => {
        const peticion = await axios.get('https://swapi.dev/api/starships')
        setStartships(peticion.data.results)
        setNextPagination(peticion.data.next)
        setPreviousPagination(peticion.data.previous)
    }

    const changePage = (page) => {
        axios.get(page)
            .then(peticion => {
                const { results } = peticion.data
                setStartships(results)
                setPreviousPagination(peticion.data.previous)
                setNextPagination(peticion.data.next)
            })
    }



    return (

        <DataContext.Provider value={{

            startships,
            setStartships,
            url,
            setUrl,
            ship,
            setShip,
            oneShip,
            allStartShips,
            nextPagination,
            setNextPagination,
            previousPagination,
            setPreviousPagination,
            changePage,
            itsLogged,
            setItsLogged
        }}>
            {children}
        </DataContext.Provider>
    )
}
