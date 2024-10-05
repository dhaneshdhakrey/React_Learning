import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'
import Card from '../UI/card.js'
function NewExpense(props){
    function onSaveDataHandler(DataofNewExpense){
        let Data={
            ...DataofNewExpense,
            id:Math.random().toString()
        }
        props.onNewExpense(Data);
    }
    return (<Card className='FormCont'>
        <ExpenseForm onSaveExpenseData={onSaveDataHandler}/>
    </Card>)
    
};


export default NewExpense;