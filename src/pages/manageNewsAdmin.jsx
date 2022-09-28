import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader/Loader'
import {useNavigate} from 'react-router-dom';

function ManageNewsAdmin() {
  const [listNews, setListNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const idNews = localStorage.getItem('id')

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
    })
   }

   const clickPaciente = (id) =>{
    localStorage.setItem("id", id)
    navigate('/editar/' +id)
  }

   useEffect(() => {
    getData()
  },[])

  return (
    <div className='container p-3'>
      <h1 className='py-2 fw-bold'>Listado de noticias</h1>
      {
        isLoading
        ?
        <div className='row'>
          <div>
            <table className="table table-hover table-bordered align-middle">
              <thead>
                <tr className='align-bottom'>
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
                      <button className='px-1 bg-success' onClick={()=>clickPaciente(news._id)}><ion-icon name="pencil"></ion-icon></button>
                      <button className='px-1 bg-danger border-rounded'><ion-icon name="trash"></ion-icon></button>
                    </td>
                  </tr>
                  ))
              }
              </tbody>              
            </table>
          </div>
          <button className='btn btn-primary w-25' onClick={()=> navigate('/form')}>Agregar una noticia</button>
        </div>
        :
        <Loader/>
        }
    </div>
  )
}

export default ManageNewsAdmin