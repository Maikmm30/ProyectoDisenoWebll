import React from "react";
import {
    Link
  } from "react-router-dom";
  import { Card, CardGroup } from "react-bootstrap";

function VentanaProveedores(){
        return (
          <div>

          <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
              <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Administración</h4>

              <CardGroup>

                  <Card className="m-5 text-center" >
                      <Link to='/listaMarcas'>
                          <Card.Body>
                              <i class="far fa-copyright fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title >Marcas</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>


                  <Card className="m-5 text-center">
                      <Link to='/catalogoProductos'>
                          <Card.Body>
                              <i class="fab fa-product-hunt fa-5x " style={{ color: "#C42709" }}></i>
                              <Card.Title>Productos</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>

         
              <CardGroup >

              <Card className="m-5 text-center ">
                      <Link to='/Proveedores'>
                          <Card.Body>
                              <i class="fas fa-people-carry fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title>Proveedores</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>
          </div>
      </div>
        );
};

export default VentanaProveedores;

