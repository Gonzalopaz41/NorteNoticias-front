import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader/Loader'
import {useNavigate} from 'react-router-dom';

function ManageNewsAdmin() {
  const [listNews, setListNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  const getData = () =>{
    fetch('http://localhost:80/admin/get', {
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

   useEffect(() => {
    getData()
    // getUsers()
    //console.log(listUsers)
  },[])

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
                  <th scope="col">Categoría</th>
                  <th scope="col">Introducción</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
              {
                listNews?.map(news=>(
                  <tr key={news._id}>
                    <td>{news.title}</td>
                    <td>{news.category}</td>
                    <td>{news.introduction}</td>
                    <td>
                      <button>Publicar</button>
                      <button>Modificar</button>
                      <button>Eliminar</button>
                    </td>
                  </tr>
                  ))
              }
              </tbody>
                {/* {
                  listNews.map((news,_id)=>{
                    <tbody>
                    <tr key={_id}>
                      <td>{console.log(news)}</td>
                      <td>hola</td>
                      <td>{news.img}</td>
                      <td>
                        <button>Publicar</button>
                        <button>Modificar</button>
                        <button>Eliminar</button>
                      </td>
                    </tr>
                    </tbody>
                  })
                } */}
              
            </table>
          </div>
          <button className='btn btn-primary' onClick={()=> navigate('/form')}>Formulario noticias</button>
        </div>
        :
        <Loader/>
        }
    </div>
  )
}

export default ManageNewsAdmin