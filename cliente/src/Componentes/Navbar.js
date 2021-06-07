import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
export default () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
          <NavDropdown title="Sistema" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Información</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Reiniciar sesión </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Salir</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Ayuda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sistema</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Seguridad</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown title="Restaurante" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Restaurante</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Licores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Vinos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </NavDropdown>

          <Nav.Link href="/Login">Login</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
