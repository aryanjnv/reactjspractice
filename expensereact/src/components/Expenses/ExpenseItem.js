import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);


  const clickHandler = () => {
    setTitle('Updated!');
  };

  const changeExpense = () => {
    setExpense(100);
  };

  const deleteHandler = () => {
    const cardElement = document.querySelector('.expense-item');
    cardElement.remove();
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense}</div>
      </div>
      <button onClick={changeExpense}>Change Expenses</button>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
