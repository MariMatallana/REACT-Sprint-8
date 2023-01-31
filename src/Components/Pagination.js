import React from 'react'
import { DataContext } from './Aplication/DataContext'
import { useContext } from 'react';

const Pagination = () => {

  const { nextPagination, previousPagination, changePage } = useContext(DataContext)


  return (
    <div>
      {previousPagination ? (<button className='btn btn-warning btn-sm me-1' onClick={() => changePage(previousPagination)}> Anterior</button>) : null
      }
      {nextPagination ? (<button className='btn btn-warning btn-sm ms-1' onClick={() => changePage(nextPagination)}> Siguiente</button>) : null}

    </div>

  )
}

export default Pagination