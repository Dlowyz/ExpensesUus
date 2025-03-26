import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpenseDate from './ExpenseDate'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'
import { useState } from 'react'
const Expenses = (props) => {
  const [filteredProps, setFilteredProp] = useState('');
  const ExpenseFilterHandler = (data) => {
  console.log('Year data in Expenses.jsx '+data)
  console.log(props.expenses)
  const results = props.expenses.filter(prop => prop.date.getFullYear().toString() == data)
  console.log(results)
  setFilteredProp(results)
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter filter={ExpenseFilterHandler}/>
      {filteredProps.length > 0 ? (filteredProps.map(expense => {return <ExpenseItem expenseData={expense} key={expense.id}/>})) : 
      (props.expenses.map(expense => {return <ExpenseItem expenseData={expense} key={expense.id}/>}))
      }
      
    </Card>
  )
}

export default Expenses