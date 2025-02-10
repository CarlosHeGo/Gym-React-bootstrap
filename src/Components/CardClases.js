import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Modal,
  ListGroup,
} from "react-bootstrap";

function CardClases({ clases }) {
  const [selectedClase, setSelectedClase] = useState(null); // Máquina seleccionada
  const [show, setShow] = useState(false);
  const [claseReservada, setClaseReservada] = useState(clases);

  const handleClose = () => {
    setShow(false);
    setSelectedClase(null);
  };

  const handleShow = (clase) => {
    setSelectedClase(clase);
    setShow(true);
  };

  const handleReserva = (claseID, diaId, horasId) => {
    const clasesDisponibles = claseReservada.map((clase) => {
      if (clase.id === claseID) {
        const dia = clase.horario.find((d) => d.dia === diaId);
        if (dia) {
          const hora = dia.horas.find((h) => h.hora === horasId);
          if (hora && hora.plazas > 0) {
            hora.plazas -= 1;
          }
        }
      }
      return clase;
    });
    setClaseReservada([...clasesDisponibles]);
  };

  return (
    <Container>
      <Row>
        {claseReservada.map((clase) => (
          <Col key={clase.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={clase.foto} alt={clase.nombre} />
              <Card.Body>
                <Card.Title>{clase.nombre}</Card.Title>
                <Card.Text>
                  <strong>Descripción: </strong>
                  {clase.descripcion}
                </Card.Text>
              </Card.Body>
              <Button variant="primary" onClick={() => handleShow(clase)}>
                Horarios
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedClase && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Horarios de {selectedClase.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedClase.horario.map((dia) => (
              <div key={dia.dia} className="mb-3">
                <h5>{dia.dia}</h5>
                <ListGroup>
                  {dia.horas.map((hora) => (
                    <ListGroup.Item
                      key={hora.hora}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span>{hora.hora}</span>
                      <span>{hora.plazas} plazas disponibles</span>
                      <Button
                        variant="success"
                        size="sm"
                        disabled={hora.plazas === 0}
                        onClick={() =>
                          handleReserva(selectedClase.id, dia.dia, hora.hora)
                        }
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
export default CardClases;
