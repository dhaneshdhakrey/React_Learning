import React,{useState} from 'react';
import './YearFilter.css';

function YearFilter(props){
    let temparr={
        ...props.allExpense
    }
    let [prevFilter,setFilter]=useState(temparr);
        function YearHandler(e){
            
            props.testtemp1(e.target.value);
        }
        
    return(
        <div className='YearSelect'>
          <label for="year">Choose a car:</label>

          <select name="Year" id="Year" onChange={YearHandler}>
            <option value="ALL">All Years</option>
            <option value="2022" >2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
    )
}

export default YearFilter;