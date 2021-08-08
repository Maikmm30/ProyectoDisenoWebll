import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import { Card, CardGroup } from "react-bootstrap";

function VentanaReportes(){
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
            document.getElementById("bitacora").style.display = "none";
            document.getElementById("facturacion").style.display = "none";
          }
          //Administrador de Seguridad
          if (rol === 'Administrador de Seguridad'){
            document.getElementById("clientes").style.display = "none";
            document.getElementById("facturacion").style.display = "none";
          }
          
        });
        
      }, []);
        return (
          <div>

          <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
              <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Reportes</h4>

              <CardGroup>

                  <Card className="m-5 text-center" id="bitacora">
                      <Link to='/bitacora'>
                          <Card.Body>
                              <i class="fas fa-book fa-5x fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title >Bitacora</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>


                  <Card className="m-5 text-center" id="clientes">
                      <Link to='/reporteClientes'>
                          <Card.Body>
                              <i class="fas fa-users fa-5x " style={{ color: "#C42709" }}></i>
                              <Card.Title>Clientes</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>

         
              <CardGroup >

              <Card className="m-5 text-center " id="facturacion">
                      <Link to='/reporteFacturacion'>
                          <Card.Body>
                              <i class="far fa-file fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title>Facturacion</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>
          </div>
      </div>
        );
};

export default VentanaReportes;

