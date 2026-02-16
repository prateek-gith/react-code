import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((user)=>{
      if(user){
        dispatch(login({'userData' : user}))
      }else{
        dispatch(logout())
      }
    })
    .finally(setLoading(false))
    
  }, [])
  if(loading){
    return(
      <h1>Mega Project loading.......</h1>

    )
  }else{
    return (
    <>
      <Header />
      {/* <h1>Mega Project</h1> */}
      <Outlet/>
      <Footer />
    </>
    )
  }
}

export default App
