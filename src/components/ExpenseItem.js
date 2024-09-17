import './ExpenseItem.css';
import Edate from './date.js';
import Card from './card.js'
function ExpenseItem(props) {
    
    return (
        <Card className='Itemcont'>
            
            <Edate date ={props.date} />
            <div className='info'>
                {props.title}
            </div>
            <div className='expense'>{props.Amount}</div>
        </Card>
    )

}
export default ExpenseItem;