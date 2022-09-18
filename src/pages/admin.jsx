import React from 'react'
import {useNavigate} from 'react-router-dom';

function Admin() {  
  const navigate = useNavigate();

  return (
    <div>
      <button className='btn btn-danger' onClick={()=> navigate('/manageUsers')}>Gestionar Usuarios</button>
      <button className='btn btn-danger' onClick={()=> navigate('/manageNews')}>Gestionar Noticias</button>
    </div>
  )
}

export default Admin