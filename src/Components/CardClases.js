import React, { useState, useContext } from "react";
import { Container, Col, Row, Card, Button, Modal, ListGroup } from "react-bootstrap";
import { ServiciosContext } from "./ServiciosProvider";

const CardClases = () => {
  const { clases, reservarClase } = useContext(ServiciosContext);
  const [selectedClase, setSelectedClase] = useState(null);
  const [show, setShow] = useState(false);
  const [clasesActualizadas, setClasesActualizadas] = useState([]);

  const handleClose = () => {
    setShow(false);
    setSelectedClase(null);
  };

  const handleShow = (clase) => {
    setSelectedClase(clase);
    setClasesActualizadas(clase.horario);
    setShow(true);
  };

  const handleReserva = (claseID, diaId, horaId) => {
    reservarClase(claseID, diaId, horaId);
    setClasesActualizadas((prevHorario) =>
      prevHorario.map((dia) =>
        dia.dia === diaId
          ? {
              ...dia,
              horas: dia.horas.map((hora) =>
                hora.hora === horaId && hora.plazas > 0
                  ? { ...hora, plazas: hora.plazas - 1 }
                  : hora
              ),
            }
          : dia
      )
    );
  };

  return (
    <Container>
      <h2 className="text-center py-3">Clases Disponibles</h2>
      <Row>
        {clases.map((clase) => (
          <Col key={clase.id} md={3} className="mb-4">
            <Card bg="dark" text="white" style={{height:"100%"}}>
              <Card.Img variant="top" src={`/${clase.foto}`} alt={clase.nombre} className="img-fluid" style={{height:"100%"}}/>
                <Card.Title className="mt-2" style={{textAlign:"center"}}>{clase.nombre}</Card.Title>
                <Card.Text style={{margin:"4%" , textAlign:"justify"}}>
                  {clase.descripcion}
                  <br/>
                </Card.Text>
                <Button style={{width:"100%"}} variant="primary" onClick={() => handleShow(clase)}>Horarios</Button>
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
            {clasesActualizadas.map((dia) => (
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
                        onClick={() => handleReserva(selectedClase.id, dia.dia, hora.hora)}
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

export default CardClases;