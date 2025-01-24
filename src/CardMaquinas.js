import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

function CardMaquinas({maquinas}) {
  return (
    <Container>
      <Row>
        {maquinas.map((maquina) => (
          <Col key={maquina.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={maquina.foto} alt={maquina.nombre}/>
              <Card.Body>
                <Card.Title>{maquina.nombre}</Card.Title>
                <Card.Text><strong>Tipo de actividad: </strong>{maquina.tipo}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default CardMaquinas;
