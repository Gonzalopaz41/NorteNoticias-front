import React, {useState, useEffect} from 'react'
import '../components/styles/news.css';
//import {useNavigate} from 'react-router-dom';
import '../components/Card/Card'
import Img1 from '../assets/publicidad.jpg'

function News() {
  const [news, setNews] = useState({
    category: "",
    title:"",
    img:"",
    introduction:"",
    description:"",
    date:"",
    author:""
  });
   const [AllNews, setAllNews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token')
  // const navigate = useNavigate();

  const getData = () =>{
    fetch(`${process.env.REACT_APP_NEWS}`, {
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

   const getNews = () =>{
    fetch(`${process.env.REACT_APP_NEWS}`, {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      setAllNews(response);
      setIsLoading(true);
    })
  }

  const clickNews = (id) =>{
    localStorage.setItem("id", id)
  }
  const idNews = localStorage.getItem('id')

  useEffect(() => {
    getData()
    getNews()
    clickNews()
  },[])

  return (
    <>
      <div className='container sectionNews'>
      <br /><br /><br /><br /><br />
        <div className='row'>
            <div className='col-9'>
              <h2>{news.category}</h2>
              <h1>{news.title}</h1>
              <img src={news.img} className='imgNews' alt='Imagen' />
              <div>
                <div>
                  <p className='intro m-3'>{news.introduction}</p>
                  <p className='textNews'>{news.description}</p>
                </div>
              </div>
            </div>
          <div className='col-3 align-items-center'>
            <img src="https://tpc.googlesyndication.com/simgad/5685295513057111522" className='m-3' alt='Imagen'/>
            <img src={Img1} className='m-3' alt='Imagen' />
          </div>
        </div>
        <div className='m-9'>
              <hr />
              <h2 className='m-3'>Más noticias</h2>
              
            </div>
      </div>     
    </>
  )
}

export default News