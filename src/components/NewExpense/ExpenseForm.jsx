import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState(
        {
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        }
    )

    const TitleChangeEvent = (event) => {
        setUserInput({
            ...userInput, 
            enteredTitle: event.target.value
        })
        console.log(userInput)
        console.log(userInput[0])
    }
    const PriceChangeEvent = (event) => {
        setUserInput({
            ...userInput, 
            enteredPrice: event.target.value
        })
        console.log(userInput)
    }
    const DateChangeEvent = (event) => {
        setUserInput({
            ...userInput, 
            enteredDate: event.target.value
            
        })
        console.log(userInput)
    }
    const SubmitClickEvent = (event) => {
        event.preventDefault()
        console.log(userInput)
        const ExpenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        }
        
        props.onSaveExpenseData(ExpenseData)

        setUserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        })
        
    }

  return (
    <form>
  <div className="new-expense-controls">
    <div className="new-expense-control">
      <label>Title </label>
      <input type="text"  onChange={TitleChangeEvent} value={userInput.enteredTitle}/>
    </div>
    <div className="new-expense-control">
      <label>Price </label>
      <input type="number" min="0.01" step="0.01" onChange={PriceChangeEvent} value={userInput.enteredPrice} />
    </div>
    <div className="new-expense-control">
      <label>Date </label>
      <input type="date" min="2024-11-12" max="2026-01-31" onChange={DateChangeEvent} value={userInput.enteredDate ? new Date(userInput.enteredDate).toISOString().split('T')[0] : ''}/>
    </div>
  </div>
  <div className="new-expense-actions">
    <button type="submit" onClick={SubmitClickEvent}>Add Expense</button>
  </div>
    </form>

  )
}

export default ExpenseForm
