import React, { use, useState } from 'react'
import './Task.css';
import User from './User';
import Login from './Login';
import { Link } from 'react-router-dom';


function Task() {
  const [user, setUser] = useState({ Title: '' ,Description:'',Assignee:''});
  const [profile, setProfile] = useState([]);
  const handleuserchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const usernames = () => {
    setProfile([...profile, user]);
    setUser({Title: '',Description:'',Assignee:''});
  };

  return (
    <>

      <div>

        <h1> Admin </h1>
        <li>
        <Link to="/Login">Login</Link> 
        <Link to="/User">User Task</Link> </li>
      </div>
      <input type='text' name="Title" value={user.Title} onChange={handleuserchange} placeholder='name' />
      <input type='text' name="Description" value={user.Description} onChange={handleuserchange} placeholder='Enter Description' />
      <input type='text' name="Assignee" value={user.Assignee} onChange={handleuserchange} placeholder='Enter Assignee' />
      <button onClick={usernames}>Enter</button>
      <div className='borders'>
        <div className='borders2'>
          {profile.map((profile, index) => (
            <><div key={index} className="task-card">
              <h3>Title:{profile.Title}</h3>
              <h3>Description:{profile.Description}</h3>
              <h3>Assignee:{profile.Assignee}</h3>
            </div>
            <User {...profile.Title} {...profile.Description} {...profile.Assignee}/>
            </>
          ))}
        </div>
        
        <div>
          <h1>User</h1>
          <h3>Title:{profile.Title}</h3>
          <h3>Description:{profile.Description}</h3>
          <h3>Assignee:{profile.Assignee}</h3>
          <h3>Status:</h3>
        </div>
      </div>
      </>

      );
}

      export default Task