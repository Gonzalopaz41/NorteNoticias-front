import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from "react-router-dom"

const Salir = () => {

const navigate = useNavigate()
  const salir = e => {
    e.preventDefault()
    localStorage.clear()
    navigate('/' , {replace:true})
  }
  return (
    <button type='submit' onClick={salir}>
     <a href="/">Salir</a> 
      </button>
  )
}

export default Salir