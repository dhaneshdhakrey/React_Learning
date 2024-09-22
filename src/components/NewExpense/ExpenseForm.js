import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
   let gamma;
    function submitHandler(event){
        event.preventDefault();
        let expenseData={
            title:prevTitle,
            Amount:prevAmount,
            Date:new Date(prevDate)
        }
        console.log(expenseData);
        setTitle('submitted');
        setAmount('');
        setDate('');
    }
    let [prevTitle,setTitle]=useState('');
    let [prevAmount,setAmount]=useState('');
    let [prevDate,setDate]=useState('');

    function titleHandler(event){
        setTitle(event.target.value);
        // console.log(prevTitle);
    }
    function amountHandler(event){
        setAmount(event.target.value);
    }
    function dateHandler(event){
        setDate(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='first1'>
                    <div>
                    <label for="title">Title</label>
                    <input type='text' value={prevTitle} id="title" name='title' placeholder='input' onChange={titleHandler}></input>
                    </div>
                    <div>
                    <label>Date</label>
                    <input type='date' value={prevDate} onChange={dateHandler} placeholder='dd,mm,yyyy'/>
                    </div>
                </div>
                <div className='Amount'>
                    <div>
                    <label>Amount</label>
                    <input type='numeric' value={prevAmount} onChange={amountHandler}/>
                    </div>
                </div>
                <button type='submit' onChange={dateHandler}>Add Expense</button>
            </form>

        </div>
    )
};

export default ExpenseForm;