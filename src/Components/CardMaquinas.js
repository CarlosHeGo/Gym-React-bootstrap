import React, { useState, useContext } from "react";
import { Container, Col, Row, Card, Button, Modal, ListGroup } from "react-bootstrap";
import { ServiciosContext } from "./ServiciosProvider";
import "../Styles/cards.css";

const CardMaquinas = () => {
  const { maquinas, reservarMaquina } = useContext(ServiciosContext);
  const [selectedMaquina, setSelectedMaquina] = useState(null);
  const [show, setShow] = useState(false);
  const [maquinasActualizadas, setMaquinasActualizadas] = useState([]);

  const handleClose = () => {
    setShow(false);
    setSelectedMaquina(null);
  };

  const handleShow = (maquina) => {
    setSelectedMaquina(maquina);
    setMaquinasActualizadas(maquina.horario);
    setShow(true);
  };

  const handleReserva = (maquinaID, diaId, horaId) => {
    reservarMaquina(maquinaID, diaId, horaId);
    setMaquinasActualizadas((prevHorario) =>
      prevHorario.map((dia) =>
        dia.dia === diaId
          ? {
              ...dia,
              horas: dia.horas.map((hora) =>
                hora.hora === horaId && hora.plazas > 0 ? { ...hora, plazas: hora.plazas - 1 } : hora
              ),
            }
          : dia
      )
    );
  };

  return (
    <Container>
      <h2 className="text-center py-3">Máquinas Disponibles</h2>
      <Row>
        {maquinas.map((maquina) => (
          <Col key={maquina.id} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={`/${maquina.foto}`} alt={maquina.nombre} style={{ height: "300px" }} />
              <Card.Body>
                <Card.Title className="card-title">{maquina.nombre}</Card.Title>
                <Card.Text className="card-text">
                  <strong>Descripción: </strong>
                  {maquina.descripcion}
                </Card.Text>
              </Card.Body>
              <Button variant="warning" onClick={() => handleShow(maquina)}>
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
            {maquinasActualizadas.map((dia) => (
              <div key={dia.dia} className="mb-3">
                <h5>{dia.dia}</h5>
                <ListGroup>
                  {dia.horas.map((hora) => (
                    <ListGroup.Item key={hora.hora} className="d-flex justify-content-between align-items-center">
                      <span>{hora.hora}</span>
                      <span>{hora.plazas} plazas disponibles</span>
                      <Button
                        variant="success"
                        size="sm"
                        disabled={hora.plazas === 0}
                        onClick={() => handleReserva(selectedMaquina.id, dia.dia, hora.hora)}
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
};

export default CardMaquinas;
