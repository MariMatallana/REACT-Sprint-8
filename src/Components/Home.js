import React from 'react'
import Carrusel1 from '../Images/Carrusel1.jpeg';
import Carrusel4 from '../Images/Carrusel4.jpeg';
import Carrusel3 from '../Images/Carrusel3.png';
import Login from './Login';

function Home() {



    return (

        <div>
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carrusel1} className="d-block w-100 border-bottom border-warning border-5"  />
                    </div>
                    <div className="carousel-item">
                        <img src={Carrusel3} className="d-block w-100 border-bottom border-warning border-5"  />
                    </div>
                    <div className="carousel-item">
                        <img src={Carrusel4} className="d-block w-100 border-bottom border-warning border-5"  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h4 className="text-center mt-4">
                ¡Bienvenido!
            </h4>
            <p className="text-center">
                Aquí podrás encontrar toda la información de las naves de StarWars.
            </p>
            <p className="text-center">
                ¿Estás listo para empezar?
            </p>
        </div>
      

    )

}

export default Home;