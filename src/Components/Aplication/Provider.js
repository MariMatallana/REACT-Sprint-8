import { createContext, useState } from 'react';
import React from 'react';
import {useContext} from 'react';

const MyProvider = (props) => {
    const [state, setState] = useState({});

    return (
        <div>
        <AppContext.Provider value={[state, setState]}>
        { props.children }
        </AppContext.Provider>
        </div>
    );
}

export default MyProvider;
export const AppContext = createContext();