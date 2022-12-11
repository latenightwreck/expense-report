import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');
  const expenseYearFilterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filterYear}
        onYearFilterData={expenseYearFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
