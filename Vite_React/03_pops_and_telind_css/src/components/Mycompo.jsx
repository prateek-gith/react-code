import React from 'react'

function Mycompo({name, obj, arr}) {

  return (
    <>
      <h3 className='border-2 p-5 rounded-2xl m-3'>My Name Is : {name}</h3>
      <h3 className='border-2 p-5 rounded-2xl m-3'>My Name Age :{obj.age} </h3>
      <h3 className='border-2 p-5 rounded-2xl m-3'>My Name Age :{obj['add']} </h3>
      <h3 className='border-2 p-5 rounded-2xl m-3'>My Name Age :{arr.join(' ')} </h3>
      
    </>
  )
}

export default Mycompo