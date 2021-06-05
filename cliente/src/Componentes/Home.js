import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {
  Link
} from "react-router-dom";
export default () => {
  return (
    <div>
        
      <div style={{ padding: "30px 250px", backgroundColor: "#FF723F"}}>
      <h1 className="p-2 text-center" style={{color: "#FFF"}} >Bienvenido</h1>
      <h4 className='text-center' style={{color: "#FFF"}}>Administración Central de los Restaurantes</h4>

        <CardGroup>
         
          <Card className="m-5 text-center" >
          <Link to='/clientesM'> 
            <Card.Body>
            <i class="fas fa-lock fa-5x" style={{color: "#C42709"}}></i>
              <Card.Title >Seguridad</Card.Title>
            </Card.Body>
            </Link>
          </Card>
         

          <Card className="m-5 text-center">
            <Card.Body>
              <i class="fas fa-utensils fa-5x " style={{color: "#C42709"}}></i>
              <Card.Title>Restaurantes</Card.Title>
            </Card.Body>
          </Card>

          <Card className="m-5 text-center">
            <Card.Body>
            <i class="fas fa-user-alt fa-5x" style={{color: "#C42709"}}></i>
              <Card.Title>Clientes</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

      </div>
      <div class="bg-light" style={{ padding: "30px 250px" }}>
        <CardGroup >

          <Card className="m-5 text-center" style={{backgroundColor: "#C42709"}}>
            <Card.Body>
            <i class="fas fa-truck fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title className="text-light">Proveedores</Card.Title>
            </Card.Body>
          </Card>

          <Card className="m-5 text-center" style={{backgroundColor: "#C42709"}}>
            <Card.Body>
            <i class="fas fa-folder-open fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title  className="text-light">Administración</Card.Title>
            </Card.Body>
          </Card>

          <Card className="m-5 text-center" style={{backgroundColor: "#C42709"}}>
            <Card.Body>
            <i class="fas fa-file-signature fa-5x" style={{color: "#FFF"}}></i>
              <Card.Title  className="text-light">Reportes</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};
