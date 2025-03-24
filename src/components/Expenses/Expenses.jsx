import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpenseDate from './ExpenseDate'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'
const Expenses = (props) => {
  const ExpenseFilterHandler = (data) => {
  console.log('Year data in Expenses.jsx '+data) 
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter filter={ExpenseFilterHandler}/>
      <ExpenseItem data = {props.data[0]}/>
      <ExpenseItem data = {props.data[1]}/>
    </Card>
  )
}

export default Expenses