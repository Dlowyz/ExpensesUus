
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
const NewExpense = (props) => {
  return (
    <Card className='NewExpenseDiv'>
      <ExpenseForm></ExpenseForm>
    </Card>
  )
}

export default NewExpense
