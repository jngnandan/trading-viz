'use client'

import React from 'react'
import Header from '../header'
import TableSelection from './tablesection'

function Screener() {
  return (
    <>
    <Header/>
    <div className='mx-6'>
      <p className='p-4 text-lg'>Screener</p>

      <TableSelection/>
      
      </div>
    </>
  )
}

export default Screener