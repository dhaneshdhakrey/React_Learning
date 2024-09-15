import './ExpenseItem.css';
function ExpenseItem(props) {
    return (
        <div className='expecont'>
            <div className='date'>
                {props.date.toISOString()};
                
            </div>
            <div className='info'>
                {props.title}
            </div>
            <div className='expense'>{props.Amount}</div>
        </div>
    )

}
export default ExpenseItem;