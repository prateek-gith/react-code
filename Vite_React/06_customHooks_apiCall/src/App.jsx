import { useState } from 'react'

import './App.css'

import {Input} from '../components/allComponentExport.js'
import Customhook from '../hooks/Customhook.js'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedValue, setConvertedValue] = useState(0)
  const allCurrency = Customhook(from)

  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setConvertedValue(amount*allCurrency[to])
    }}>

      <Input 
      oDisplay="block"  
      label="From" 
      currencyOpthions = {Object.keys(allCurrency)} 
      amount={amount} 
      OnCurrenyChange={(currncy)=>{setFrom(currncy)}} 
      onAmountChange={(amount)=>setAmount(amount)} 
      selectCurrency = {from}
      
      />

      <Input 
      oDisplay="none" 
      label="To" 
      currencyOpthions = {Object.keys(allCurrency)} 
      amount={convertedValue} 
      OnCurrenyChange={(currncy)=>{setTo(currncy)}} 
      selectCurrency={to}
      />
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
