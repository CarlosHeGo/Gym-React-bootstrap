import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function AreaCliente() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellidos"
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Usuario ya registrado, elija otro nombre de usuario.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Introduce una Ciudad válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="Provincia" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control type="text" placeholder="Código Postal" required />
          <Form.Control.Feedback type="invalid">
            Introduce un código postal válido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Acepto los términos y condiciones"
          feedback="Debes aceptar los términos y condiciones antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar formulario</Button>
    </Form>
  );
}

export default AreaCliente;