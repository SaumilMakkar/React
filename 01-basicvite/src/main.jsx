import { StrictMode } from 'react'
import React from 'react'  
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const reactElement={
  type:'a',
  props:{
      href:"https://google.com",
      target:'_blank'
  },
  children:'Click me to visit google'
}
function MyApp(){
  return (
    <>
    <h1>Custom React App</h1>

   
    </>
  )
  
}
const AnotherElement=(
  <a href="https:google.com" target='_blank'>Visit Google</a>
)
const areactElement=React.createElement(

  'a',
  {href:'https://google.com',target:"_blank"},
  'click to visit google'
)

createRoot(document.getElementById('root')).render(
 areactElement
)
