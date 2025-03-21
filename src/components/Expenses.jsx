import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpenseDate from './ExpenseDate'
const Expenses = (props) => {
  return (
    <div className='expenses'>
      <ExpenseItem data = {props.data[0]}/>
      <ExpenseItem data = {props.data[1]}/>

    </div>
  )
}

export default Expenses