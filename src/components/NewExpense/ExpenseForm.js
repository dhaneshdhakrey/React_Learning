import React from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
    function submitHandler(event){
        event.preventDefault();

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='first1'>
                    <div>
                    <label for="title">Title</label>
                    <input type='text' id="title" name='title' placeholder='input' ></input>
                    </div>
                    <div>
                    <label>Date</label>
                    <input type='text' placeholder='dd,mm,yyyy'/>
                    </div>
                </div>
                <div className='Amount'>
                    <div>
                    <label>Amount</label>
                    <input type='numeric'/>
                    </div>
                </div>
                <button type='Submit'>Add Expense</button>
            </form>

        </div>
    )
};

export default ExpenseForm;