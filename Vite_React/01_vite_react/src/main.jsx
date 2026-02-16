// import { StrictMode, createElement} from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function CustomApp() {

  return (
    <>
      <h1>Prateek Using Vite React CustomApp</h1>
    </>
  )
}

const customElement = (<h2>I Am CustomElement</h2>)

const anotherElement = React.createElement(
  'a',
  {href : 'https://www.google.com', target : '_blank'},
  'I Am AnotherElement',
)

createRoot(document.getElementById('root')).render(

    // <CustomApp />
    // customElement
    // anotherElement
    <App></App>
)
