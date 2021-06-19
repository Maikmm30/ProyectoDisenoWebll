import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {
  Link
} from "react-router-dom";



function Administracion() {
    return (
        <div>

            <div style={{ padding: "30px 250px", backgroundColor: "#FF723F" }}>
                <h4 className='text-center' style={{ color: "#FFF" }}>Ventana Administración</h4>

                <CardGroup>

                    <Card className="m-5 text-center" >
                        <Link to='/administracion/especiales'>
                            <Card.Body>
                                <i class="fas fa-utensils fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title >Especiales</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>


                    <Card className="m-5 text-center">
                        <Link to='/empleados'>
                            <Card.Body>
                                <i class="fas fa-user-alt fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Empleados</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    
                </CardGroup>

           
                <CardGroup >

                <Card className="m-5 text-center">
                        <Link to='/mesas'>
                            <Card.Body>
                                <i class="fas fa-table fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Mesas</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    <Card className="m-5 text-center">
                        <Link to='/puestos'>
                            <Card.Body>
                                <i class="fas fa-user-alt fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Puesto</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
}
export default Administracion;