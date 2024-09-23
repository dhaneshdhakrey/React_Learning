import React,{useState} from 'react';
import './App.css';

import Cont1 from './components/Expenses/Expensecont';
import NewExpense from './components/NewExpense/NewExpense';

let arr1=[{title:"CarService",Amount:"$921.2",date:new Date(2022,4,12)},{title:"Laptop",Amount:"$702",date:new Date(2024,11,25)}]
function App() {
  let data;
  let [prevExpense,updateNewExpense]=useState(arr1);

   function onNewExpenseHandler(Data){
      
      // console.log(data.title);
      updateNewExpense([Data,...prevExpense]);
   }
  return (
    <div>
      <div className='NewExpenseCont'>
    <NewExpense onNewExpense={onNewExpenseHandler}/>
    </div>
    <Cont1 arr={prevExpense} />
    </div>
  )
};

export default App;
