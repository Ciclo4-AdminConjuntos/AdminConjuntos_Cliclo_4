import axios from "axios";

//import { useState } from "react";
import logoConjunto from "../img/logo_transparent.png";
import "../App.css";
import Bar from '../components/Navbar/Bar';
import Login from '../components/Login/Login';

axios.defaults.withCredentials = true;

const Iniciosesion = () => {

    return (
        <div className="App">
        <div>
          <Bar />
          <br />
          <img
            alt=""
            src={logoConjunto}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{' '}
          <br />
          <p style={{ fontSize: '32px', font: 'Mulish', fontWeight: 'bold' }}>
            Iniciar sesión
          </p>
          <Login />
        </div>
      </div>
      );
}
export default Iniciosesion;