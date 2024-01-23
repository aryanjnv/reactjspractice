import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear,setFilteredYear]=useState('2020');

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} on ChnageFilter={filterChangeHandler}/>
      {props.items.map(expense=>(
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />))}
    </Card>
  );
}

export default Expenses;