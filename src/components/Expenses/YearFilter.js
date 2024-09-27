import React,{useState} from 'react';
import './YearFilter.css';

function YearFilter(props){
    let temparr={
        ...props.allExpense
    }
    let [prevFilter,setFilter]=useState(temparr);
        function temp10(e){
            console.log(e.target.value);
            props.testtemp1();
        }
        
    return(
        <div className='YearSelect'>
          <label for="year">Choose a car:</label>

          <select name="Year" id="Year  "onChange={temp10}>
            {/* <option value="2021">2021</option> */}
            <option value="2022" >2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
    )
}

export default YearFilter;