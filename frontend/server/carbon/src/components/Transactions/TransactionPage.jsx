import React from 'react'
import Welcome from './Welcome'
import Services from './Services'
import './transaction.css'

export const TransactionPage = () => {
  return (
    <div className='trans-main'>
        <Welcome/>
        <Services/>
    </div>
  )
}
