import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem data = {props.data[0]}/>
      <ExpenseItem data = {props.data[1]}/>
    </Card>
  )
}

export default Expenses