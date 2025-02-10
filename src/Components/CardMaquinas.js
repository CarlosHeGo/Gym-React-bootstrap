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

function CardMaquinas({ maquinas }) {
  const [selectedMaquina, setSelectedMaquina] = useState(null); // Máquina seleccionada
  const [show, setShow] = useState(false);
  const [maquinaReservada, setMaquinaReservada] = useState(maquinas);

  const handleClose = () => {
    setShow(false);
    setSelectedMaquina(null);
  };

  const handleShow = (maquina) => {
    setSelectedMaquina(maquina);
    setShow(true);
  };

  const handleReserva = (maquinaId, diaId, horasId) => {
    const maquinasDisponibles = maquinaReservada.map((maquina) => {
      if (maquina.id === maquinaId) {
        const dia = maquina.horario.find((d) => d.dia === diaId);
        if (dia) {
          const hora = dia.horas.find((h) => h.hora === horasId);
          if (hora && hora.plazas > 0) {
            hora.plazas -= 1;
          }
        }
      }
      return maquina;
    });
    setMaquinaReservada([...maquinasDisponibles]);
  };

  return (
    <Container>
      <Row>
        {maquinaReservada.map((maquina) => (
          <Col key={maquina.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={maquina.foto} alt={maquina.nombre} />
              <Card.Body>
                <Card.Title>{maquina.nombre}</Card.Title>
                <Card.Text>
                  <strong>Información: </strong>
                  {maquina.descripcion}
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
            {selectedMaquina.horario.map((dia) => (
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
                          handleReserva(selectedMaquina.id, dia.dia, hora.hora)
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
export default CardMaquinas;
