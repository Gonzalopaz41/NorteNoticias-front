import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader/Loader'

function ManageUsersAdmin() {
  const [listUsers, setListUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token')

  const getUsers = () =>{
    fetch(`${process.env.REACT_APP_USERS}`, {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      setListUsers(response);
      setIsLoading(true);
    })
  }

  useEffect(() => {
   
    getUsers()
    
  },[])


  return (
    <div className='container p-3'>
      <h1>Listado de usuarios</h1>
      {
        isLoading
        ?
        <div className='row'>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  listUsers?.map(users=>(
                    <tr key={users._id}>
                      <td>{users.name}</td>
                      
                      <td>{users.surname}</td>
                      <td>{users.email}</td>
                      <td>
                        <button>Publicar</button>
                        <button>Modificar</button>
                        <button>Eliminar</button>
                      </td>
                    </tr>
                    ))
                  
                }
              </tbody>
            </table>
          </div>
        </div>
        :
        <Loader/>
      }
    </div>
  
  )
}

export default ManageUsersAdmin