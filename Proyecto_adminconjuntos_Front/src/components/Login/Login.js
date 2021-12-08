import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
//import { withRouter } from 'react-router-dom';

const Login = () => {
  const [cedula, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successful, setSuccessfull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorPassword("");
    setErrorEmail("");
    setSuccessfull("");
    console.log(cedula);
    console.log(password);
    axios
        .post(`http://localhost:2000/api/login`,{ cedula, password })
        .then(res => {
          localStorage.setItem ('jwtToken',res.data.token)
          console.log(res.data)
          this.props.history.push('/noticias')
          .catch(err =>{
            console.error(err)
            this.errors.push(err)
            console.log(this.errors)
          })
        })
  };
  return (
    <div className="formato">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label
            style={{ fontSize: '22px', font: 'Mulish', fontWeight: 'bold' }}
          >
            Email{' '}
          </Form.Label>
          <Form.Control
            
            type="cedula"
            className={errorEmail ? "form-control is-invalid" : "form-control"}
            placeholder="Ingresar cedula"
            style={{ width: '60%', textAlign: 'center' }}
            value={cedula}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small>{errorEmail}</small>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            style={{ fontSize: '22px', font: 'Mulish', fontWeight: 'bold' }}
          >
            Contraseña
          </Form.Label>
          <Form.Control
            
            className={
              errorPassword ? "form-control is-invalid" : "form-control"
            }
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '60%', textAlign: 'center' }}
          />
          <p className="text-danger">
            <small>{errorPassword}</small>
          </p>
        </Form.Group>
        {errorPassword || errorEmail ? (
          <div className="checkbox mb-3 text-danger fw-bold">
            <small>Error al registrar</small>
          </div>
        ) : null}

        {successful ? (
          <div className="checkbox mb-3 text-success fw-bold ">
            <small>Sesión iniciada Id Usuario: {successful}</small>
          </div>
        ) : null}
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: 'rgba(68, 3, 129, 0.97)', color: 'white' }}
        >
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
