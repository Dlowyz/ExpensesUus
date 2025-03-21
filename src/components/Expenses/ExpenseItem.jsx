import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
    
  return (
    <Card className='expense-item'>
        <div className='expense-item_date'>
            <ExpenseDate date={props.data.date}/>
        </div>
        <div className='expense-item_description'>
            <h2>{props.data.title}</h2>
            <div className='expense-item_price'>{props.data.price}€</div>
        </div>
    </Card>
  )
}

export default ExpenseItem