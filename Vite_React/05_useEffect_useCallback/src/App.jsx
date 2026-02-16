import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [lengthValue, setLengthValue] = useState(8)
  const [isNuberAllowed, setIsNumberAllowed] = useState(false)
  const [ischarAllowed, setIsCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useref
  const passwordInputRef = useRef(null)



  // useCallback(function, dependencies)
  // function eighter function referance or arrow function ,dependencies always in array

  const passwordGenerator = useCallback(()=>{
    let myPassword = ""
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNuberAllowed){
      passwordString = passwordString + "0123456789"
    }
    else if (ischarAllowed){
      passwordString = passwordString + '!@#$%^&*()_+{}[]|\/><'
    }
    else{
      passwordString = passwordString
    }

    for (let i=1; i<=lengthValue; i++){
      let randomNumber = Math.floor(Math.random() * passwordString.length)
      myPassword = myPassword + passwordString[randomNumber]
    }

    setPassword(myPassword)

  }, [lengthValue, isNuberAllowed, ischarAllowed])

  // useEffect(function, dependencies)
  // function eighter function referance or arrow function ,dependencies always in array

  useEffect(()=>{
    passwordGenerator()
  }, [lengthValue, isNuberAllowed, ischarAllowed])



  const copyPassword = useCallback(()=>{
    passwordInputRef.current?.select()
    // passwordInputRef.current?.setSelectionRange(0,5)

    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className='bg-amber-500 h-svh flex flex-wrap justify-center items-center'>

      <div className='bg-white flex flex-wrap justify-center items-center w-5xl h-4/12 rounded-4xl flex-col'>
        <div className='flex flex-wrap justify-center bg-amber-200 p-2 rounded-4xl'>

          <input className='bg-white text-black rounded-2xl text-center p-3 m-3' type="text" placeholder='Password' value={password} readOnly ref={passwordInputRef} />

          <button className='border-none bg-amber-600 text-amber-100 rounded-2xl p-3 m-3' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex flex-wrap justify-center items-center bg-amber-900 rounded-2xl'>
          <div className="range flex flex-wrap items-center justify-center m-2 gap-1">
            <label htmlFor="rangeValue">Length {lengthValue}</label>
            <input className='m-3' id='rangeValue' type="range" min={8} max={100} value={lengthValue} onChange ={(e) => {setLengthValue(e.target.value)}} />
          </div>

          <div className="isnumber flex flex-wrap items-center justify-center m-2 gap-1">
            <label htmlFor="isNumber">Is Number</label>
            <input type="checkbox"  id='isNumber' onChange={()=> {setIsNumberAllowed((preIsNuberAllowed)=>!preIsNuberAllowed)}} />
          </div>
          
          <div className="ischaracter flex flex-wrap items-center justify-center m-2 gap-1">
            <label htmlFor="isChar">Is Char</label>
            <input type="checkbox" id='isChar' onChange={()=> {setIsCharAllowed((preIsCharAllowed)=>!preIsCharAllowed)}}/>
          </div>
          
        </div>
      </div>
      

    </div>
  )
}

export default App
