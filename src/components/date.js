import './date.css';
function Edate(props){
    let month=props.date.toLocaleString('en-US',{month:'long'})
    let day=props.date.toLocaleString('en-US',{day:'2-digit'});
    let year=props.date.getFullYear();
    return(
        <div className='date'>
                <div className='month'>{month}</div>
                
                <div>{day}</div>
                <div>{year}</div>
                
                
            </div>
    )
}
export default Edate;