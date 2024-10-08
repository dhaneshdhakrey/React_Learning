import React,{useState} from 'react';

import './ExpenseItem.css';
import Edate from './date.js';
import Card from '../UI/card.js'
function ExpenseItem(props) {

    const [title,functiontoupdate]= useState(props.title);
    function clickHandler(){
        functiontoupdate('Updated!');
    }
    return (
        <Card className='Itemcont'>
            
            <Edate date ={props.date} />
            <div className='info'>
                {props.title}
            </div>
            <div className='expense'>${props.Amount} </div>
            
            
        </Card>
    )

}
export default ExpenseItem;