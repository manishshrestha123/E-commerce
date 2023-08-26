import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route,  RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/login';
import Addproduct from './page/Addproduct';
import Signup from './page/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<Login/>} />
      <Route path='newproduct' element={<Addproduct/>} />
      <Route path='signup' element={<Signup/>} />
  
     
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();