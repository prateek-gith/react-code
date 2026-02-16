import { useState } from 'react'

import './App.css'


function App() {
  // useState ('INISIAL_VALUE') => Returns a stateful value, and a function to update it.
  let [conter_value,set_counter_value] = useState(0) 

  function addValue() {
    let new_counter_value = conter_value + 1
    set_counter_value(new_counter_value)
  }

  function minusValue(){
    let new_counter_value = conter_value - 1
    set_counter_value(new_counter_value)
  }

  

  return (
    <>
      <h1>02_Hooks (Counter) </h1>
      <h2>Counter Value : {conter_value}</h2>
      <button id='button' onClick={addValue}>Value +</button>
      <button id='button-value'> {conter_value}</button>
      <button id='button-2' onClick={minusValue}>Value -</button>
    </>
  )

  
}

export default App



