import React,{useState} from 'react';
import AddUser from './components/Users/addUser.js'
import UsersList from './components/Users/UserList.js'
// let users[];
function App() {
  let[currentUsers,setUsers]=useState([]);
  function userUpdateHandler(user){
    setUsers(currentUsers=>{
      return [...currentUsers,user]
    })
    }
    

  return (
    <div>
      <AddUser tryAddUser={userUpdateHandler} />
      <UsersList Users={currentUsers}/>

    </div>
  );
}

export default App;
