import React, { use, useState } from 'react'
import './Task.css';


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
      </div>
      <input type='text' name="Title" value={user.Title} onChange={handleuserchange} placeholder='name' />
      <input type='text' name="Description" value={user.Description} onChange={handleuserchange} placeholder='Enter Description' />
      <input type='text' name="Assignee" value={user.Assignee} onChange={handleuserchange} placeholder='Enter Assignee' />
      <button onClick={usernames}>Enter</button>
      <div className='borders'>
        <div className='borders2'>
          {profile.map((profile, index) => (
            <div key={index} className="task-card">
              <h3>Title:{profile.Title}</h3>
              <h3>Description:{profile.Description}</h3>
              <h3>Assignee:{profile.Assignee}</h3>
            </div>
          ))}
        </div>
      </div>
      </>

      );
}

      export default Task