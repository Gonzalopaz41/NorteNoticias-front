import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  const salir = e => {
    e.preventDefault()
    localStorage.clear()
    navigate('/')   
  }
  return (
      
    <button type='submit' onClick={salir}>salir</button>
    
  )
}

export default Home