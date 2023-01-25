import React from 'react'
import { DataContext } from './Aplication/DataContext'
import { useContext } from 'react';

const Pagination = () => {

  const { nextPagination, previousPagination, changePage } = useContext(DataContext)


  return (
    <div>
      { previousPagination ? (<button className='btn btn-warning btn-sm me-1' onClick={() => changePage(previousPagination)}> Anterior</button>) : null
      }
      { nextPagination ?   (<button className='btn btn-warning btn-sm ms-1' onClick={() => changePage(nextPagination)}> Siguiente</button>) : null}
      
    </div>


    // {prevPage && <button onClick={() => gotopage(prevPage)} className="btn btn-success mx-2 ">Prev</button>}
    //           {nextPage && <button onClick={() => gotopage(nextPage)} className="btn btn-success">Next</button>}


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