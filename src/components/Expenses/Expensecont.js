import './Expensecont.css'
import Card from '../UI/card.js';
import Yeardropdown from './YearFilter.js'
import ExpenseItem from './ExpenseItem'


function ExpenseCont(props) {
  function testtemp(){
    console.log(" hi Suguna");
    
  }
  return (
    <Card className='main_cont'>
      <div>
        <div className='Header1'>
        <h2>Let's get started!</h2>
        <Yeardropdown allExpense={props.arr} testtemp1={testtemp}/>
        </div>

        {props.arr.map(obj1 => <ExpenseItem key={obj1.id} title={obj1.title} Amount={obj1.Amount} date={obj1.date} />)}
      </div>
    </Card>
  );
}

export default ExpenseCont;
