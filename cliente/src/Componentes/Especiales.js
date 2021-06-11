import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {
    Link
} from "react-router-dom";


function Especiales() {
    return (
        <div>

            <div style={{ padding: "30px 250px", backgroundColor: "#FF723F" }}>
                <h4 className='text-center' style={{ color: "#FFF" }}>Especialidades</h4>

                <CardGroup>

                    <Card className="m-5 text-center" >
                        <Link to='/administracion/especiales/buffet'>
                            <Card.Body>
                                <i class="fas fa-utensils fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title >Buffet</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>


                    <Card className="m-5 text-center">
                    <Link to='/administracion/especiales/bebidas'>
                            <Card.Body>
                                <i class="fas fa-glass-whiskey fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Bebidas</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>


                </CardGroup>


                <CardGroup >

                    <Card className="m-5 text-center">
                    <Link to='/administracion/especiales/especialidades'>
                            <Card.Body>
                                <i class="fas fa-table fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Especialidades</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>


                </CardGroup>
            </div>
        </div>
    );
}
export default Especiales;