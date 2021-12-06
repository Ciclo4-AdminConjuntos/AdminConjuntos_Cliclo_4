import React from "react";
import { Card, Container } from "react-bootstrap";
import logo from "../img/logo_transparent.png";
import  "./info.css"

function Informacion() {
  return (
    <Card className="mt-5"  style={{ width: "15rem",border: "5px solid #32A287", top:'33%',position: 'fixed' }}>

    <Container>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={logo} class="img-fluid  rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Residente</h5>
        </div>
      </div>
      
        <p class="card-text mb-0 ml-3">Nombre:</p>
        <p class="card-text mb-0">Apellido:</p>
        <p class="card-text mb-0">Cedula:</p>
        <p class="card-text mb-0">Torre:</p>
        <p class="card-text mb-3">Apartamento:</p>
        </div>
      </Container>
    
  </Card>
  );                          
}

export default Informacion;
