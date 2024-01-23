import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    let expensesContent=<p>No expenses Found.</p>
 
    if(props.filteredExpenses.length>1){
      expensesContent= props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title || 'No Title'}
          amount={expense.amount || 0}
          date={expense.date || new Date()}
          id={expense.id}
          items={props.items}
          setExpenses={props.setExpenses}
        />
      ))
    }
  return (
    <>
    </>
  )
}

export default ExpensesList