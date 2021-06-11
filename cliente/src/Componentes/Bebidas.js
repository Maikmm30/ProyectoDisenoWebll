import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {
    Link
} from "react-router-dom";


function Bebidas() {
    return (
        <div>

            <div style={{ padding: "30px 250px", backgroundColor: "#FF723F" }}>
                <h4 className='text-center' style={{ color: "#FFF" }}>Especialidades</h4>

                <CardGroup>

                    <Card className="m-5 text-center" >
                        <Link to='/administracion/especiales/bebidas/calientes'>
                            <Card.Body>
                                <i class="fas fa-mug-hot fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title >Calientes</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    <Card className="m-5 text-center">
                        <Link to='/administracion/especiales/bebidas/heladas'>
                            <Card.Body>
                                <i class="fas fa-snowflake fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Heladas</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    <Card className="m-5 text-center">
                        <Link to='/administracion/especiales/bebidas/gaseosas'>
                            <Card.Body>
                                <i class="fas fa-glass-whiskey fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Gaseosas</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                </CardGroup>


                <CardGroup >

                    <Card className="m-5 text-center">
                        <Link to='/administracion/especiales/bebidas/licores'>
                            <Card.Body>
                                <i class="fas fa-beer fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Licores</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    <Card className="m-5 text-center">
                        <Link to='/administracion/especiales/bebidas/vinos'>
                            <Card.Body>
                                <i class="fas fa-wine-glass-alt fa-5x" style={{ color: "#C42709" }}></i>
                                <Card.Title>Vinos</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>


                </CardGroup>
            </div>
        </div>
    );
}
export default Bebidas;