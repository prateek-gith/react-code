import { useState } from "react"

function App() {
  const [color, setColor] = useState('white')

  function bgColorAqua(){
    setColor('aqua')
  }

  function bgColorBlack(){
    setColor('black')
  }
  function bgColorRed(){
    setColor('red')
  }
  function bgColorGreen(){
    setColor('green')
  }

  return (
      <div className={color}>
        <div className="button">
          <button onClick={bgColorAqua} style={{backgroundColor : 'aqua'}}>Aqua</button>
          <button onClick={bgColorBlack} style={{backgroundColor : 'black'}}>Black</button>
          <button onClick={bgColorRed} style={{backgroundColor : 'red'}}>Red</button>
          <button onClick={bgColorGreen} style={{backgroundColor : 'green'}}>Green</button>
          <button onClick={()=>setColor('blue')} style={{backgroundColor : 'blue'}}>blue</button>
        </div>
      </div>
  )
}

export default App
