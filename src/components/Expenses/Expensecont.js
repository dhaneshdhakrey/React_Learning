import './Expensecont.css'
import Card from '../UI/card.js';

import ExpenseItem from './ExpenseItem'


function ExpenseCont(props) {

  return (
    <Card className='main_cont'>
      <div>
        <div className='Header1'>
        <h2>Let's get started!</h2>
        <div className='YearSelect'>
          <label for="year">Choose a car:</label>

          <select name="Year" id="Year  ">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        </div>

        {props.arr.map(obj1 => <ExpenseItem key={obj1.id} title={obj1.title} Amount={obj1.Amount} date={obj1.date} />)}
      </div>
    </Card>
  );
}

export default ExpenseCont;
