import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

function Edit() {
  const [news, setNews] = useState({
    category: "",
    title:"",
    img:"",
    introduction:"",
    description:"",
    date:"",
    author:""
  });

  const token = localStorage.getItem('token')
  const idNews = localStorage.getItem('id')
  const navigate = useNavigate();

  const getData = () =>{
    fetch('http://localhost:80/admin/get', {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      const result = response.find( item => item._id === idNews );
      setNews({
        category: result.category,
        title: result.title,
        img: result.img,
        introduction: result.introduction,
        description: result.description,
        date: result.date,
        author: result.author
      });
    })
   }

  
  const updateData = (e) =>{
    e.preventDefault();

    Swal.fire({
      title: '¿Estas seguro de modificar esta noticia?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:80/admin/editar/${idNews}`,{
          method: 'PATCH',
          body: JSON.stringify({
            category: news.category,
            title: news.title,
            img: news.img,
            introduction: news.introduction,
            description: news.description,
            date: news.date,
            author: news.author
          }),
          headers: {
            'acces_token': token,
            'Content-type': 'application/json; charset=UTF-8',
          }})
          .then(response => response.json())
          .then(response => {console.log(response)})

        Swal.fire(
          'Modificada',
          'La noticia ha sido modificada.',
          'success'
        )

        navigate('/manageNews')
      }
    })
   }

  const handleChange = ({target}) => {
    setNews({
      ...news,
      [target.name]: target.value
    })
  }

  useEffect(() => {
    getData()
    // updateData()
  },[])

  return (
    <>
    <div className='container containerform my-3'>
      <div className='row justify-content-center align-items-center p-3'>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Categoría</label>
          <input name="category" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1" value={news.category}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Titulo</label>
          <input name="title" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1" value={news.title}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">URL Imagen</label>
          <input name="img" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1" value={news.img}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Introducción</label>
          <textarea name="introduction" type="String" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" value={news.introduction}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
          <textarea name="description" type="String" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" value={news.description}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Fecha de publicación</label>
          <input name="date" type="Date" onChange={handleChange} className="form-control" id="exampleFormControlInput1" value={news.date}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Autor</label>
          <input name="author" type="String" onChange={handleChange} className="form-control" id="exampleFormControlInput1" value={news.author}/>
        </div>
        <button className='button py-2' onClick={updateData}>Editar noticia</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Edit