import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Header/Navbar/Navbar.css'

const Salir = () => {

const navigate = useNavigate()
  const salir = e => {
    e.preventDefault()
    localStorage.clear()
    navigate('/' , {replace:true})
    window.location.reload()
  }
  return (
    <button className=" nav-link" type='submit'  onClick={salir}>
       Cerrar Sesion
    </button>
  )
}

export default Salir