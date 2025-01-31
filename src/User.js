import React from 'react'
import Task from './Task'

function User(props) {
  return (
    <div>
    {/*<div>{props.profile.Description}
         {props.profile.Title}
         {props.profile.Assignee}</div>*/}
         <div>
          <h1>User</h1>
          <h3>Title:</h3>
          <h3>Description:</h3>
          <h3>Assignee:</h3>
          <h3>Status:</h3>
        </div>
    

        <h1> welcome </h1>
    </div>
        
  );
}

export default User