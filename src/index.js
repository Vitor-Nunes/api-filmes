import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home'
import Details from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
//ReactDOM.createRoot(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/details/:id" element={<Details/>}/>
   </Routes>
  </BrowserRouter>,
  //document.getElementById('root')
);



