import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'
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
      <ExpenseItem
        data={expenses[0]}
      />
      <ExpenseItem
        data={expenses[1]}
      />
        
    </>
  )
}

export default App
