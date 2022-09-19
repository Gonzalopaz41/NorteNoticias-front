import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Alerta from '../components/Alertas/Alerta';

function FormAdmin() {
  // const [news, setNews] = useState({
  //   category: "",
  //   title:"",
  //   img:"",
  //   introduction:"",
  //   description:"",
  //   date:"",
  //   author:""
  // });
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');

  // const token = localStorage.getItem('token')
  const [alerta, setAlerta] = useState({})
  const {msg} = alerta

  const handleSubmit = async e => {
    e.preventDefault();

    if ([category,title,img,introduction,description,date,author].includes('')){
      setAlerta({msg: 'Hay campos vacios', error:true})
      return;
    }

    try {
      const respuesta = await axios.post('http://localhost:80/admin/news', {category,title,img,introduction,description,date,author})
      console.log(respuesta)
      setAlerta({msg:"Noticia creada",
      error:false
    })
      navigate('/')
    } catch (error) {
      console.log(error)
      setAlerta ({
        msg:error.response.data.msg,
        error:true
      })
      
    }

    // fetch("http://localhost:80/admin/news",{
    //   method: 'POST',
    //   body:JSON.stringify(news),
    //   headers: {
    //     'acces_token': token,
    //     'Content-type': 'application/json; charset=UTF-8',
    //   }
    // })
    // .then(response => response.json())
    // .then(response => 
    //   // setNews(response)
    //   console.log(response))
  }

  // const handleChange = ({target}) => {
  //   setNews({
  //     ...news,
  //     [target.name]: target.value
  //   })
  // }

  return (
    <>
    <div className='container containerform my-3'>
      <div className='row justify-content-center align-items-center p-3'>
      {msg && <Alerta
                alerta={alerta}
              />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Categoría</label>
          <input name="category" type="text" onChange={e => setCategory(e.target.value)} value={category} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Titulo</label>
          <input name="title" type="String" onChange={e => setTitle(e.target.value)} value={title} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Introducción</label>
          <textarea name="introduction" type="String" onChange={e => setIntroduction(e.target.value)} value={introduction} className="form-control" id="exampleFormControlTextarea1" rows="3"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">URL Imagen</label>
          <input name="img" type="String" onChange={e => setImg(e.target.value)} value={img} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
          <textarea name="description" type="String" onChange={e => setDescription(e.target.value)} value={description} className="form-control" id="exampleFormControlTextarea1" rows="3"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Fecha de publicación</label>
          <input name="date" type="Date" onChange={e => setDate(e.target.value)} value={date} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Autor</label>
          <input name="author" type="String" onChange={e => setAuthor(e.target.value)} value={author} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <button className='button p-2'>Publicar noticia</button>
      </form> 
      </div>
    </div>
    </>
  )
}

export default FormAdmin