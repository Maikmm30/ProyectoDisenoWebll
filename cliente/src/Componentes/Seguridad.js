import React from "react";
import {
    Link
  } from "react-router-dom";
  import { Card, CardGroup } from "react-bootstrap";
function Seguridad () {
  return (
    <div>

    <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
        <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Seguridad</h4>

        <CardGroup>

            <Card className="m-5 text-center" >
                <Link to='/usuarios'>
                    <Card.Body>
                        <i class="fas fa-user-alt fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title >Usuarios</Card.Title>
                    </Card.Body>
                </Link>
            </Card>


            <Card className="m-5 text-center">
                <Link to='/consecutivos'>
                    <Card.Body>
                        <i class="fas fa-window-restore fa-5x " style={{ color: "#C42709" }}></i>
                        <Card.Title>Consecutivos</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            
        </CardGroup>

   
        <CardGroup >

        <Card className="m-5 text-center ">
                <Link to='/paises'>
                    <Card.Body>
                        <i class="fas fa-globe-americas fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title>Países</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="m-5 text-center ">
            <Link to='/cajas'>
                <Card.Body>
                    <i class="fas fa-cash-register fa-5x" style={{ color: "#C42709" }}></i>
                    <Card.Title>Cajas</Card.Title>
                </Card.Body>
            </Link>
        </Card>

        </CardGroup>

        <CardGroup >

        <Card className="m-5 text-center ">
                <Link to='/roles'>
                    <Card.Body>
                        <i class="fas fa-address-card fa-5x" style={{ color: "#C42709" }}></i>
                        <Card.Title>Roles</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

            <Card className="m-5 text-center ">
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
