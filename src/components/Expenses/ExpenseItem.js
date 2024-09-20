import React,{useState} from 'react';

import './ExpenseItem.css';
import Edate from './date.js';
import Card from '../UI/card.js'
function ExpenseItem(props) {
    console.log("console log is executed once");
    
    const [title,functiontoupdate]= useState(props.title);
    function clickHandler(){
        functiontoupdate('Updated!');
        
    }
    return (
        <Card className='Itemcont'>
            
            <Edate date ={props.date} />
            <div className='info'>
                {title}
            </div>
            <div className='expense'>{props.Amount} </div>
            <button onClick={clickHandler}>Click me</button>
            
        </Card>
    )

}
export default ExpenseItem;