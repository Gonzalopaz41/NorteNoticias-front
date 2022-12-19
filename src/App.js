import React, {useState} from 'react';
import Header from './components/Header/Header'
import {Route, Routes } from "react-router-dom";
import Home from './pages/home' 
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './pages/login'
import Admin from './pages/admin'
import ManageUsers from './pages/manageUsersAdmin'
import ManageNews from './pages/manageNewsAdmin'
import FormAdmin from './pages/formAdmin'
import Edit from './pages/edit';
import Categoria from './pages/Category';

function App() {
  const [isLogin] = useState(localStorage.getItem('token') || false);
  const [isAdmin] = useState(localStorage.getItem('roll'));
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/registrarse' element={<Register/>}/>
        <Route path='/' element={isLogin ? <Home/> : <Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={isAdmin ? <Admin/> : <Login />}/>
        <Route path='/manageUsers' element={<ManageUsers/>}/>
        <Route path='/manageNews' element={<ManageNews/>}/>
        <Route path='/form' element={<FormAdmin/>}/>
        {/* <Route path='/editar/:id' element={props=>(<Edit {...props}/>)}/> */}
        <Route path='/editar/:id' element={<Edit/>}/>
       <Route path='/categoria' element={<Categoria/>} />
      </Routes> 
      <Footer/> 
    </>
  );
}

export default App;
