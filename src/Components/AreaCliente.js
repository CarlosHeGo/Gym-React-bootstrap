import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";

function AreaCliente() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/fondoareacliente.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card
              className="p-4"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Row className="g-0 align-items-center">
                <Col lg={6} className="p-4">
                  <h2
                    className="text-center mb-4"
                    style={{ fontSize: "1.8rem", fontWeight: "bold" }}
                  >
                    INICIAR SESIÓN
                  </h2>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Introduce tu email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Row className="align-items-center">
                      <Col xs={7}>
                        <Form.Group className="mb-3">
                          <Form.Check type="checkbox" label="Recuérdame" />
                        </Form.Group>
                      </Col>
                      <Col className="text-end">
                        <a href="404" className="text-light">
                          Olvidaste tu contraseña?
                        </a>
                      </Col>
                    </Row>
                    <Button
                      variant="warning"
                      className="w-100"
                      style={{
                        background: "#f8a30d",
                        border: "none",
                        borderRadius: "10px",
                        padding: "12px",
                        fontSize: "1.2rem",
                      }}
                    >
                      Inicia Sesión
                    </Button>
                    <p className="text-center mt-3">
                      ¿No tienes cuenta?{" "}
                      <a href="404" className="text-warning">
                        Crea una
                      </a>
                    </p>
                  </Form>
                </Col>

                <Col lg={6} className="d-none d-lg-block">
                  <img
                    src="areacliente.png"
                    alt="Corredor en cinta"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AreaCliente;
