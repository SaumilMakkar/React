import React from 'react'
import Login from './Login.jsx'
import { useContext } from 'react'
import UserContext from './Context/UserContext.jsx'

function Profile() {
    const {user}=useContext(UserContext);
    if(!user){
       <h1>Not Logged In</h1>
    }
  return (
    <div>"Profile":{user.username}
    <h1>More Components</h1>
    </div>
  )
}

export default Profile