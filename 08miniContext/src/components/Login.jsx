import React,{useState} from 'react'
import { use } from 'react';
import UserContext from './Context/UserContext.jsx'

function Login() {
const [username,setUsername]=React.useState("");
const [password,setPassword]=React.useState("");

const {setUser}=useContext(UserContext);


const handleSubmit=(e)=>{

    //prevent the page from refreshing
    e.preventDefault();
    setUser({username,password});
    
}



  return (
    <div>Login
<input type="text"
onChange={(e)=>setUsername(e.target.value)}
placeholder="Username"
value={username}

/>

<input type="password"
onChange={(e)=>setPassword(e.target.value)}
placeholder="Password"
value={password}
/>
<button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login