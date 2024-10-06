import React from "react";
import classes from './UserList.module.css';
import Card from "../UI/Card";
function UserList(props) {
    return (
        <Card cssClass={classes.users}>
        <ul> 
            {props.Users.map((user) => (
                <li key={Math.random()} >
                    {user.Name} {user.Age} years old
                </li>
            ))}
        </ul>
        </Card>
    );
}

export default UserList;
