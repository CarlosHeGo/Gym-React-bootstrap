import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function Navegacion() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logoGym.png"
            alt="Logo del gimnasio"
            className="img-fluid"
            width={40}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Nombre gym</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#machines">Máquinas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#classes">Clases</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#login">Area Cliente</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;