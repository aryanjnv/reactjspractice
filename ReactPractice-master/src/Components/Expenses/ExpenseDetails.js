import React from 'react'

const ExpenseDetails=(props)=> {
  return (
   
       <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h4>{props.locationOfExpenditure}</h4>
            <div className='expense-item__price' >${props.amount}</div>
        </div>
    
  )
}

export default ExpenseDetails
