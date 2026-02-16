import { useState } from 'react'

import './App.css'
import Mycompo from './components/Mycompo'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    age : 25,
    'add' : 'Kanpur'
  }
  
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='border-2 p-5 rounded-2xl'>Telwind </h1>

      <Mycompo name = 'Prateek Yadav' obj = {myObj} arr = {myArr}></Mycompo>
      
    </>
  )
}

export default App
