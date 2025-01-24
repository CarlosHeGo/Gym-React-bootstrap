import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import ReservasClases from "./ReservasClases";

function CardClases({ clases }) {

  return (
    <Container>
      <Row>
        {clases.map((clase) => (
          <Col key={clase.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={clase.foto} alt={clase.nombre} />
              <Card.Body>
                <Card.Title>{clase.nombre}</Card.Title>
                <Card.Text><strong>Descripción: </strong>{clase.descripcion}</Card.Text>
              </Card.Body>
              <ReservasClases clase={clase} />
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default CardClases;
