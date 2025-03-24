
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (savedExpenseData) => {
        const expenseData = {
            ...savedExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }
  return (
    <Card className='NewExpenseDiv'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
  )
}

export default NewExpense
