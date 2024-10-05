import React,{useState} from 'react';
import './Expensecont.css'
import Card from '../UI/card.js';
import Yeardropdown from './YearFilter.js'
import ExpenseItem from './ExpenseItem'


function ExpenseCont(props) {
  let [selectedYear,setSelectedYear]=useState('ALL');

  function YearFilterUpdater(e){
      setSelectedYear(e); 
  }
  const filteredExpenses = props.arr.filter(function(expense) {
    if (selectedYear === 'ALL') {
        return true; // If no year is selected, return all expenses
    } else {
        return new Date(expense.date).getFullYear().toString() === selectedYear;
    }
});

  return (
    <Card className='main_cont'>
      <div>
        <div className='Header1'>
        <h2>Let's get started!</h2>
        <Yeardropdown allExpense={props.arr} testtemp1={YearFilterUpdater}/>
        </div>
        {filteredExpenses.map(obj1 => <ExpenseItem key={obj1.id} title={obj1.title} Amount={obj1.Amount} date={obj1.date} />)}
        {/* {props.arr.map(obj1 => <ExpenseItem key={obj1.id} title={obj1.title} Amount={obj1.Amount} date={obj1.date} />)} */}
      </div>
    </Card>
  );
}

export default ExpenseCont;
