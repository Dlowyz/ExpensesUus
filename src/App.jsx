import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
function App() {
  const [count, setCount] = useState(0)
  const expenses = [
    {
      date: new Date(2025, 3, 21),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2028, 3, 21),
      title: 'Old book',
      price: 10.99
    }
    ]
  
  return (
    <>
    <NewExpense/>
      <Expenses
        data={expenses}
      />
        
    </>
  )
}

export default App
