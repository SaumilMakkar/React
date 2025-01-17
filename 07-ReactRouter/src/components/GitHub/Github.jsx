import React from 'react'
import { use } from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/SaumilMakkar')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers:{data.followers}
    <img src={data.avatar_url} alt='github avatar' className='w-32 h-32 m-4'/>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
const response=await fetch('https://api.github.com/users/SaumilMakkar')
return response.json()

}
