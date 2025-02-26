import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="pb-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="Logo gimnasio" src="/logoGym.png" width={40} height={40} style={{ marginRight: "10%" }} />
          Gimbo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="SERVICIOS" id="basic-nav-dropdown" menuVariant="dark" className="mt-2">
              <NavDropdown.Item as={Link} to="/servicios/maquinas">
                MAQUINAS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios/clases">
                CLASES
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto" className="mt-2">
              CONTACTO
            </Nav.Link>
            <Nav.Link as={Link} to="/cliente" className="d-flex align-items-center">
              <Button variant="warning">Área Cliente</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
