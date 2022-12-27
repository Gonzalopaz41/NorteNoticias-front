import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function FormAdmin() {
  const [news, setNews] = useState({
    category: "",
    title:"",
    img:"",
    introduction:"",
    description:"",
    date:"",
    author:""
  });
  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_POST_NEWS}`,{
      method: 'POST',
      body:JSON.stringify(news),
      headers: {
        'acces_token': token,
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(response => response.json())
    .then(response => {
      setNews(response);
      navigate('/manageNews');
      console.log(response)})

    Swal.fire({
      icon: 'success',
      title: 'Noticia publicada'
    })
  }
  
  const handleChange = ({target}) => {
    setNews({
      ...news,
      [target.name]: target.value
    })
  }

  return (
    <>
    <div className='container containerform my-3'>
      <div className='row justify-content-center align-items-center p-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Categoría</label>
          <input name="category" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Titulo</label>
          <input name="title" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">URL Imagen</label>
          <input name="img" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Introducción</label>
          <textarea name="introduction" type="String" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
          <textarea name="description" type="String" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Fecha de publicación</label>
          <input name="date" type="Date" onChange={handleChange} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Autor</label>
          <input name="author" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <button className='button p-2'>Publicar noticia</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default FormAdmin