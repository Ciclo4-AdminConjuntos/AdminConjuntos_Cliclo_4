import axios from "axios";
import Noticia from "../components/Noticia";
import Menu from "../components/Menu";
import Informacion from "../components/Informacion";
import PublicarNoticia from "../components/PublicarNoticia";
//import { useState } from "react";
import logo from "../img/logo_transparent.png";
import "../App.css";

axios.defaults.withCredentials = true;

const MuroNnoticias = () => {
    return (
        <div>
          <nav class="navbar fixed-top" style={{}}>
            <div class=" mt-0 mb-0 mx-auto">
              <h3>
                <img src={logo} alt="" width="60" height="60" />
                Admin
              </h3>
            </div>
            <div class="btn-group mr-5">
            <button class="btn btn-default btn-circle mr-5">
            <img src={logo} alt="" width="60" height="60" />
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="/#">Acción #1</a></li>
        <li><a href="/#">Acción #2</a></li>
        <li><a href="/#">Acción #3</a></li>
        <li class="divider"></li>
        <li><a href="/#">Acción #4</a></li>
      </ul>
    </div>
      
          </nav>
          <div>
    
    
          <div class="container">
      <div class="row">
        <div class="col">
          <Menu />
          <Informacion></Informacion>
        </div>
        <div class="col">
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        </div>
        <div class="col">
          <PublicarNoticia></PublicarNoticia>
        </div>
      </div>
    </div>
    
          </div>
        </div>
      );
}
export default MuroNnoticias;