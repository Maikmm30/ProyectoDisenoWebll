import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardGroup } from "react-bootstrap";
import {
  Link
} from "react-router-dom";
function Home(){

  useEffect(() => {
    Axios.get("http://localhost:3001/administracion/especiales/bebidas/calientes/id").then((res) => {
      function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }  
      const rol = getCookie("rol");
      console.log(rol);
      //Administrador de Sistema
      if (rol === 'Administrador de Sistema'){
        document.getElementById("seguridad").style.display = "none";
      }
      //Administrador de Seguridad
      if (rol === 'Administrador de Seguridad'){
        document.getElementById("restaurantes").style.display = "none";
        document.getElementById("clientes").style.display = "none";
        document.getElementById("proveedores").style.display = "none";
        document.getElementById("administracion").style.display = "none";
      }
      //Administrador de Cuentas
      if (rol === 'Administrador de Cuentas'){
        document.getElementById("restaurantes").style.display = "none";
        document.getElementById("clientes").style.display = "none";
        document.getElementById("proveedores").style.display = "none";
        document.getElementById("administracion").style.display = "none";
      }
    });
    
  }, []);
  return (
    <div>
        
      <div style={{ padding: "30px 250px", backgroundColor: "#FF723F"}}>
      <h1 className="p-2 text-center" style={{color: "#FFF"}} >Bienvenido</h1>
      <h4 className='text-center' style={{color: "#FFF"}}>Administración Central de los Restaurantes</h4>

        <CardGroup>
          <Card className="m-5 text-center" id="seguridad">
          <Link to='/seguridad'> 
            <Card.Body>
            <i className="fas fa-lock fa-5x" style={{color: "#C42709"}}></i>
              <Card.Title >Seguridad</Card.Title>
            </Card.Body>
            </Link>
          </Card>
         

          <Card className="m-5 text-center" id="restaurantes">
          <Link to='/restaurantes'> 
            <Card.Body>
              <i className="fas fa-utensils fa-5x " style={{color: "#C42709"}}></i>
              <Card.Title>Restaurantes</Card.Title>
            </Card.Body>
          </Link>
          </Card>

          <Card className="m-5 text-center" id="clientes">
            <Link to='clientes'>
            <Card.Body>
            <i className="fas fa-user-alt fa-5x" style={{color: "#C42709"}}></i>
              <Card.Title>Clientes</Card.Title>
            </Card.Body>
            </Link>
          </Card>
        </CardGroup>

      </div>
      <div className="bg-light" style={{ padding: "30px 250px" }}>
        <CardGroup >

          <Card className="m-5 text-center" id="proveedores" style={{backgroundColor: "#C42709"}}>
          <Link to='/ventanaProveedores'>
            <Card.Body>
            <i className="fas fa-truck fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title className="text-light">Proveedores</Card.Title>
            </Card.Body>
            </Link>
          </Card>

          <Card className="m-5 text-center" id="administracion" style={{backgroundColor: "#C42709"}}>
          <Link to='/administracion'>
            <Card.Body>
            <i className="fas fa-folder-open fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title  className="text-light">Administración</Card.Title>
            </Card.Body>
            </Link>
          </Card>

          <Card className="m-5 text-center" id="reportes" style={{backgroundColor: "#C42709"}}>
          <Link to='/ventanaReportes'>
            <Card.Body>
            <i className="fas fa-file-signature fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title  className="text-light">Reportes</Card.Title>
            </Card.Body>
            </Link>
          </Card>
        </CardGroup>
      </div>
    </div>
    
  ); 
};
export default Home;
