import { createContext, useState } from 'react';
import React from 'react';
import axios from 'axios'

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [startships, setStartships] = useState(null)
    const [url, setUrl] = useState('')
    const [ship, setShip] = useState('')


    const oneShip = async (url) => {
        let peticion = await axios.get(`${url}`)
        peticion = peticion.data
        setShip(peticion)
    }
    

    return (

        <DataContext.Provider value={{

            startships,
            setStartships,
            url,
            setUrl,
            // id,
            // setId,
            // picture,
            // setPicture,
            ship,
            setShip,
            oneShip
        }}>
            {children}
        </DataContext.Provider>
    )
}
