import React from 'react'
import { DataContext } from './Aplication/DataContext'
import { useContext } from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    // const { pagination, setPagination } = useContext(DataContext)

    // const handlePrevious = () => {
    //     onPrevious();
    // }

    // const handleNext = () => {
    //     onNext();
    // }


    return (
      <div>
        <button className='btn btn-warning btn-sm me-1' > Anterior</button>
        <button className='btn btn-warning btn-sm ms-1' > Siguiente</button>
      </div>
      
      
      
      
      
        // <nav>
        //     <ul className='pagination justify-content-center'>
        //         <li className='page-item'>
        //         <button className='btn btn-warning page-link' > Anterior</button>
        //         </li>
        //     </ul>
        //     <ul className='pagination justify-content-center'>
        //         <li className='page-item'>
        //         <button className='btn btn-warning ms-1 page-link' > Siguiente</button>
        //         </li>
        //     </ul>
            
            
        // </nav>
        // <nav>
        //     <ul className='pagination justify-content-center'>
        //         {prev ? (
        //             <li className='page-item'>
        //                 <button className='btn btn-warning page-link' onClick={handlePrevious}> Anterior</button>
        //             </li>) : null}
        //         {next ? (
        //             <li className='page-item'>
        //                 <button className='btn btn-warning ms-1 page-link' onClick={handleNext}> Siguiente</button>
        //             </li>) : null}
        //     </ul>
        // </nav>
    )
}

export default Pagination