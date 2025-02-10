import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Nombre gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/servicios/maquinas">Máquinas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios/clases">Clases</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/cliente">Área Cliente</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;