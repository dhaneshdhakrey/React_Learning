import './App.css';

import Cont1 from './components/Expenses/Expensecont';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let data;
   function onNewExpenseHandler(DatatoAdd){
      data={
        ...DatatoAdd,
      }
   }
  return (
    <div>
      <div className=' NewExpenseCont'>
    <NewExpense onNewExpense={onNewExpenseHandler}/>
    </div>
    <Cont1 test={data} />
    </div>
  )
};

export default App;
