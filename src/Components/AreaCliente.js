import { Form, Row, Col, Card } from "react-bootstrap";

function AreaCliente() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Card>
        <div class="container my-5">
          <div class="card row flex-row-reverse">
            <img
              class="col-lg-4 card-img-end img-fluid p-0"
              src="https://picsum.photos/300/200"
            />
            <div class="col-lg-8 card-body">
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Introduce tu email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Row>
                  <Col xs={7}>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Recuérdame" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <a href="#">Olvidaste tu contraseña</a>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AreaCliente;
