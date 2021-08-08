import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import { Card, CardGroup } from "react-bootstrap";
function Seguridad () {

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
          //Administrador de Cuentas
          if (rol === 'Administrador de Cuentas'){
            document.getElementById("usuarios").style.display = "none";
            document.getElementById("consecutivos").style.display = "none";
            document.getElementById("paises").style.display = "none";
            document.getElementById("roles").style.display = "none";
            document.getElementById("unidadMedida").style.display = "none";
          }
        });
        
      }, []);

  return (
    <div>

    <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
        <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Seguridad</h4>

        <CardGroup>

            <Card className="m-5 text-center" id="usuarios">
                <Link to='/usuarios'>
                    <Card.Body>
                        <i class="fas fa-user-alt fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title >Usuarios</Card.Title>
                    </Card.Body>
                </Link>
            </Card>


            <Card className="m-5 text-center" id="consecutivos">
                <Link to='/consecutivos'>
                    <Card.Body>
                        <i class="fas fa-window-restore fa-5x " style={{ color: "#C42709" }}></i>
                        <Card.Title>Consecutivos</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            
        </CardGroup>

   
        <CardGroup >

        <Card className="m-5 text-center " id="paises">
                <Link to='/paises'>
                    <Card.Body>
                        <i class="fas fa-globe-americas fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title>Países</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="m-5 text-center " id="cajas">
            <Link to='/cajas'>
                <Card.Body>
                    <i class="fas fa-cash-register fa-5x" style={{ color: "#C42709" }}></i>
                    <Card.Title>Cajas</Card.Title>
                </Card.Body>
            </Link>
        </Card>

        </CardGroup>

        <CardGroup >

        <Card className="m-5 text-center " id="roles">
                <Link to='/roles'>
                    <Card.Body>
                        <i class="fas fa-address-card fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title>Roles</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="m-5 text-center " id="unidadMedida">
            <Link to='/unidadMedida'>
                <Card.Body>
                    <i class="fas fa-balance-scale-right fa-5x" style={{ color: "#C42709" }}></i>
                    <Card.Title>Unidades de Medida</Card.Title>
                </Card.Body>
            </Link>
        </Card>

        </CardGroup>
    </div>
</div>
  );
};

export default Seguridad;
