import React, { useState } from "react";
import { Container, Col, Row, Card, Button, Modal, ListGroup } from "react-bootstrap";

function CardMaquinas({ maquinas }) {
  const [selectedMaquina, setSelectedMaquina] = useState(null); // Máquina seleccionada
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedMaquina(null);
  };

  const handleShow = (maquina) => {
    setSelectedMaquina(maquina);
    setShow(true);
  };

  return (
    <Container>
      <Row>
        {maquinas.map((maquina) => (
          <Col key={maquina.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={maquina.foto} alt={maquina.nombre} />
              <Card.Body>
                <Card.Title>{maquina.nombre}</Card.Title>
                <Card.Text>
                  <strong>Tipo de actividad: </strong>
                  {maquina.tipo}
                </Card.Text>

              </Card.Body>
              <Button variant="primary" onClick={() => handleShow(maquina)}>
                  Horarios
                </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedMaquina && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Horarios de {selectedMaquina.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedMaquina.horario.map((dia, index) => (
              <div key={index} className="mb-3">
                <h5>{dia.dia}</h5>
                <ListGroup>
                  {dia.franjas.map((franja, i) => (
                    <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center">
                      <span>{franja.hora}</span>
                      <span>
                        {franja.plazas_disponibles}/{franja.plazas} disponibles
                      </span>
                      <Button
                        variant="success"
                        size="sm"
                        disabled={franja.plazas_disponibles === 0}
                      >
                        Reservar
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default CardMaquinas;