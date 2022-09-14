import { data } from 'autoprefixer';
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Loader from '../components/Loader/Loader'

function Admin() {
  const [listNews, setListNews] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token')
  const getData = () =>{
    fetch('http://localhost:80/admin', {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      setIsLoading(true);
      setListNews(response);
      console.log(response)
    })
  }

  const getUsers = () =>{
    fetch('http://localhost:80/register', {
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
    getData()
    getUsers()
    console.log(listUsers)
  },[isLoading])

  return (
    <div className='container p-3'>
      <h1>Listado de noticias</h1>
      {
        isLoading
        ?
        <div className='row'>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  listNews?.map((news)=>{
                    <tr>
                      <td>hola</td>
                      <td></td>
                      <td>{news?.title}</td>
                      <td>
                        <button>Publicar</button>
                        <button>Modificar</button>
                        <button>Eliminar</button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
          <button className='btn btn-primary'>Formulario noticias</button>
        </div>
        :
        <Loader/>
      }

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
                  listUsers?.map((prod, i)=>{
                    <tr key={i}>
                      <td>{prod.name}</td>
                      <td>{prod.surname}</td>
                      <td>{prod.email}</td>
                    </tr>
                  })
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

export default Admin