import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
const dummy_expenses = [
  {
    id: 1,
    date: new Date(2025, 3, 21),
    title: 'New book',
    price: 30.99
  },
  {
    id: 2,
    date: new Date(2024, 3, 21),
    title: 'Old book',
    price: 10.99
  },
  {
    id: 3,
    date: new Date(2023, 3, 21),
    title: 'Hater book',
    price: 1.99
  }]
function App() {
  const [count, setCount] = useState(0)
  

  const [expenses, setExpenses]  = useState(dummy_expenses)

    

    const addExpenseHandler = (expense) => {
      setExpenses((previousExpenses) => {return [expense, ...previousExpenses]
      })
    }
  
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        expenses={expenses}
      />
        
    </>
  )
}

export default App
