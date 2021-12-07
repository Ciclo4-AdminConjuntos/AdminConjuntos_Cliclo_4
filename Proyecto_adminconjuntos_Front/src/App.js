import React from "react";
import Iniciosesion from './pages/Iniciosesion'
import MuroNoticias from './pages/Muronoticias'
import "./App.css";
//import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

//import { BrowserRouter, Routes, Route,Switch  } from "react-router-dom";
import { BrowserRouter, Route,Routes  } from 'react-router-dom';
import Add from "./pages/Add";


function App() {
  return (
    <BrowserRouter>
    
    <div className="container">
      <Routes>
        
        <Route exact path="/" element={<Iniciosesion />} />
        <Route exact path="/noticias" element={<MuroNoticias />} />
        <Route exact path="/AgregarNoticia" element={<Add />} />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
