import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'
import Card from '../UI/card.js'
function NewExpense(){
    return (<Card className='FormCont'>
        <ExpenseForm/>
    </Card>)
    
};


export default NewExpense;