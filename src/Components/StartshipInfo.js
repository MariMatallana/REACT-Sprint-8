import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Startships from './Startships'

const StartshipInfo = () => {

    const params = useParams()

    useEffect(() => {
       console.log(params)
    }, [params])



return (
   
    <div className="container text-white">
        <h5 className="text-uppercase mx-auto text-center mt-4"> {params.name}</h5>
        <img></img>
    </div>
    
)
}

export default StartshipInfo;