import './Expensecont.css'
import Card from '../UI/card.js';

import ExpenseItem from './ExpenseItem'


function ExpenseCont(props) {
  
  return (
    <Card className='main_cont'>
      <div>
      <h2>Let's get started!</h2>
         
          {props.arr.map(obj1 => <ExpenseItem title={obj1.title} Amount={obj1.Amount} date={obj1.date}/>)}   
        </div>
    </Card>
  );
}

export default ExpenseCont;
