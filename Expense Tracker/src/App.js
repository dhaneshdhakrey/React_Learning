import React,{useState} from 'react';
import './App.css';

import Cont1 from './components/Expenses/Expensecont';
import NewExpense from './components/NewExpense/NewExpense';

let arr1=[{id:Math.random().toString(),title:"CarService",Amount:"921.2",date:new Date(2022,4,12)},{id:Math.random().toString(),title:"Laptop",Amount:"702",date:new Date(2024,11,25)}]
function App() {
  
  let [prevExpense,updateNewExpense]=useState(arr1);

   function onNewExpenseHandler(Data){
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
