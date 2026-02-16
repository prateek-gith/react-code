import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue(){
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    setCounter((preCounter)=>{
      return preCounter + 1; 
    })

    setCounter((preCounter)=>{
      return preCounter + 1; 
    })

    setCounter((preCounter)=>{
      return preCounter + 1; 
    })
  }

  function removeValue(){
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Count Value Is : {counter}</h1>
      <button onClick={addValue}>Add +</button>
      <button onClick={removeValue}>Remove -</button>
      <br />
      <pre>
        it is a most common interview question which is ask many time in interview, <br />
        when we set value as like "setCounter(counter+1)" again and again you can see in code, <br />
        then react use the concept "Fiber", <br />
        'Fiber' that take setState/state value (use in this code addValue function) as bundle <br />
        mean when fiber see "setCounter(counter+1)" this use again and again in after one line then fiber think that it is one code and run only one line not all line <b>That is the reason it increase the only one value </b><br />
        if we want fiber run every line (mean increase value in every line) then use a callback Function inside the setCounter function <br />
        callback function not a new approach in setCounter function, by default setCounter take a callback function, but in the short we use only value for set 
        {/* (setCounter(()=>{return value}))  */}
        <br />
        so callback take a parameter "preCounter" mean previous Counter value and return value preCounter+1 <br />
        so when we again write same code in next line with callback then it take preCounter updated value <br />
        that is the reason when we use 
        {/* (setCounter((preCounter)=>{return preCounter + 1 }))  */}
        again and again and run click on button then increase value till line and return output with last updated value
        <br />

        <br />

        <p>You Can In Code</p>
      
      </pre>
    </>
  )
}

export default App
