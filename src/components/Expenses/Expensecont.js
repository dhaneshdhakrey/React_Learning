import './Expensecont.css'
import Card from '../UI/card.js';

import ExpenseItem from './ExpenseItem'

let arr=[{title:"CarService",Amount:"$921.2",date:new Date(2022,4,12)},{title:"Laptop",Amount:"$702",date:new Date(2024,11,25)}]
function ExpenseCont(props) {
  
  return (
    <Card className='main_cont'>
      <div>
      <h2>Let's get started!</h2>
          <ExpenseItem title={arr[0].title} Amount={arr[0].Amount} date={arr[0].date} ></ExpenseItem>
          <ExpenseItem title={arr[1].title} Amount={arr[1].Amount} date={arr[1].date} ></ExpenseItem>
          {props.test.map(obj1 => <ExpenseItem title={obj1.title} Amount={obj1.Amount} date={obj1.Date}/>)}
          </div>
    </Card>
  );
}

export default ExpenseCont;
