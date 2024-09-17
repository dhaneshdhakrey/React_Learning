import './ExpenseItem.css';
import Edate from './date.js';
function ExpenseItem(props) {
    
    return (
        <div className='expecont'>
            
            <Edate date ={props.date} />
            <div className='info'>
                {props.title}
            </div>
            <div className='expense'>{props.Amount}</div>
        </div>
    )

}
export default ExpenseItem;