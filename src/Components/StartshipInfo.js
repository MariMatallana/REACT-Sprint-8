import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Startships from './Startships'

const StartshipInfo = () => {

    const {id} = useParams()

    



return (
   
    <div className="container text-white">
        <h5 className="text-uppercase mx-auto text-center mt-4"> {id}</h5>
    </div>
    
)
}

export default StartshipInfo;