import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpenseItem></ExpenseItem>
    </>
  )
}

export default App
