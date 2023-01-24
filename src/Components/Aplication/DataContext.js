import { createContext, useState } from 'react';
import React from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [startships, setStartships] = useState(null)
    const [url, setUrl] = useState('')
    const [id, setId] = useState('')
    const [picture, setPicture] = useState(null)
    const [ship, setShip] = useState('')

    return (

        <DataContext.Provider value={{

            startships,
            setStartships,
            url,
            setUrl,
            id,
            setId,
            picture,
            setPicture,
            ship,
            setShip
        }}>
            {children}
        </DataContext.Provider>
    )
}
