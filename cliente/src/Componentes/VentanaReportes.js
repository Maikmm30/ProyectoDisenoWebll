import React from "react";
import {
    Link
  } from "react-router-dom";
  import { Card, CardGroup } from "react-bootstrap";

function VentanaReportes(){
        return (
          <div>

          <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
              <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Reportes</h4>

              <CardGroup>

                  <Card className="m-5 text-center" >
                      <Link to='/bitacora'>
                          <Card.Body>
                              <i class="fas fa-book fa-5x fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title >Bitacora</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>


                  <Card className="m-5 text-center">
                      <Link to='/reporteClientes'>
                          <Card.Body>
                              <i class="fas fa-users fa-5x " style={{ color: "#C42709" }}></i>
                              <Card.Title>Clientes</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>

         
              <CardGroup >

              <Card className="m-5 text-center ">
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

