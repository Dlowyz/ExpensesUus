import React, { useState } from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)
    const clickHandler = () =>
    {
      console.log('Clicked')
      setTitle('Updated '+title)
      console.log(title)
    }
  return (
    <Card className='expense-item'>
        <div className='expense-item_date'>
            <ExpenseDate date={props.expenseData.date}/>
        </div>
        <div className='expense-item_description'>
            <h2>{title}</h2>
            <div className='expense-item_price'>{props.expenseData.price}€</div>
        </div>
        <button onClick={clickHandler}>Click me</button>
    </Card>
  )
}

export default ExpenseItem