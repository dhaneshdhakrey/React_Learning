import React,{useState} from 'react';
import Card from '../UI/Card'
import classes from './addUser.module.css';
import Button from '../UI/Button'
function AddUser(props){
    function submitHandler(event){
        event.preventDefault();
        // props.temp(event);
        if(currentAge.trim()==0||currentName.trim()==0)return;
        if(+currentAge>0&&+currentAge<110){
        // console.log(currentName,currentAge);
        let a={
            Age:currentAge,
            Name:currentName
        }
        props.tryAddUser(a);
        setAge('');
        setName('');}
        else{
            alert("your age cant be real")
        }

    }
    let [currentName,setName]=useState('');
    let [currentAge,setAge]=useState('');

    function nameHandler(event){
        setName(event.target.value);
    }
    function ageHandler(event){
        setAge(event.target.value);
    }
return  (
    <Card cssClass={classes.input}>
        {/* hamara custome component banate hai umien jo sare default vale keywords hote hai jaise 'className' vagera kaam nahi karte  */}
<form onSubmit={submitHandler}>
    <label htmlFor='Username'> username</label>
    <input id='Username'type='text' value={currentName} onChange={nameHandler}></input>
    <label htmlFor='Age'>enter your age</label>
    <input id='Age' type='number' value={currentAge} onChange={ageHandler}></input>
    <Button type='submit'>
     Add User
    </Button>
</form>
</Card>);
}
export default AddUser; 