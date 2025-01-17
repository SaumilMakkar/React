import React,{useState} from 'react'
import UserContext from './UserContext.jsx'


const UserContextProvider=({children})=>{

const [user,setUser]=useState({});
return(
    <UserContext.Provider value={{user,setUser}} >


    </UserContext.Provider>
)

}

export default UserContextProvider