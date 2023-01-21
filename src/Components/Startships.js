import { useEffect, useState } from 'react';
import axios from 'axios'


const allStartShips = async (state) => {
    const peticion = await axios.get('https://swapi.dev/api/starships/')
    state(peticion.data.results)
}

export {
    allStartShips
}


// function Startships() {

//     const [aircraft, setAircraft] = useState([]);
    
//     useEffect(() => {

        

//         // fetch("https://swapi.dev/api/starships/")
//         //     .then((res) => res.json())
//         //     .then((data) => {
               
//         //         setAircraft(data)
//         //         console.log(data)
//         //         console.log(aircraft)
//         //         console.log(aircraft.results)
 
//         //     })
//     }, [])

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card text-start bg-dark ">
//                             <div className="card-body p-1" >
//                               <h6 className="text-uppercase m-1 text-white"> {}</h6>
//                                 <p className=" m-1 text-white">{aircraft ? aircraft.model : null}</p> 
//                             </div>
                            
//                         </div>
//                     </div>
//                    .
//                 </div>
//             </div>
//         </>
//     )

// }
// export default Startships;