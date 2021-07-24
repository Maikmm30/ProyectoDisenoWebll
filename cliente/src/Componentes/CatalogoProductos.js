import React from "react";
import {
  Link
} from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";


function CatalogoProductos(){
        return (     <div>

          <div style={{ padding: "30px 350px", backgroundColor: "#FF723F" }}>
              <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Productos</h4>

              <CardGroup>

                  <Card className="m-5 text-center" >
                      <Link to='/comestibles'>
                          <Card.Body>
                              <i class="fas fa-drumstick-bite fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title >Comestibles</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>


                  <Card className="m-5 text-center">
                      <Link to='/empaques'>
                          <Card.Body>
                              <i class="fas fa-box fa-5x " style={{ color: "#C42709" }}></i>
                              <Card.Title>Desechos y Empaques</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>

         
              <CardGroup >

              <Card className="m-5 text-center ">
                      <Link to='/limpieza'>
                          <Card.Body>
                              <i class="fas fa-broom fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title>Limpieza e Higiene</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              <Card className="m-5 text-center ">
              <Link to='/tecnologia'>
                  <Card.Body>
                      <i class="fas fa-laptop fa-5x" style={{ color: "#C42709" }}></i>
                      <Card.Title>Tecnología</Card.Title>
                  </Card.Body>
              </Link>
          </Card>

              </CardGroup>

              <CardGroup >

              <Card className="m-5 text-center ">
                      <Link to='/utensilio'>
                          <Card.Body>
                              <i class="fas fa-utensils fa-5x" style={{ color: "#C42709" }}></i>
                              <Card.Title>Equipos y Utensilios</Card.Title>
                          </Card.Body>
                      </Link>
                  </Card>

                  
              </CardGroup>
          </div>
      </div>
        );
};

export default CatalogoProductos;