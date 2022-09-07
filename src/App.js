import React, {useState} from 'react';
import Header from './components/Header/Header'
import {Route, Routes } from "react-router-dom";
import Home from './pages/home' 
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './pages/login'
import Admin from './pages/admin'

function App() {
  const [isLogin] = useState(localStorage.getItem('token') || false);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/registrarse' element={<Register/>}/>
        <Route path='/' element={isLogin ? <Home/> : <Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes> 
      <Footer/> 
    </>
  );
}

export default App;
