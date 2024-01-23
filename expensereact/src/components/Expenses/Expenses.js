import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2020')

  const filterChangeHandler=(selectedYear)=>{
     setFilteredYear(selectedYear)
  }

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  });

  let expensesContent=<p>No expenses Found.</p>
 
  if(filteredExpenses.length>0){
    expensesContent= filteredExpenses.map((expense) => (
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
  
    <Card className="expenses">
    <ExpensesFilter
    selected={filteredYear}
    onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses }/>
   {expensesContent}
   {filteredExpenses.length==1?<p>Only single Expense here. Please add more...</p>:""}
      
    </Card>
    </>
  );
}

export default Expenses;
