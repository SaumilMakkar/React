import { useState } from 'react'

import './App.css'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import UserContextProvider from './components/Context/UserContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Video for Context API</h1>
      <Login />
      <Profile />
      </UserContextProvider>
  )
}

export default App
