import { useEffect, useState } from 'react';

function Startships() {

    const [aircraft, setAircraft] = useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const aircraftData = {
                    name: data.results[2].name,
                    model: data.results[2].model
                }
                setAircraft(aircraftData);
            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="col-12">
                        <div class="card text-start">
                            <div class="card-body p-1" >
                              <h6 class="text-uppercase m-1"> {aircraft ? aircraft.name : null}</h6>
                                <p class=" m-1">{aircraft ? aircraft.model : null}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Startships;