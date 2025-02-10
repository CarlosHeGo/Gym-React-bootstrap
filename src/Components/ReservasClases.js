import { ListGroup, Modal } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ReservasClases({ clase }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Ver horarios
            </Button>
            <Modal show={show}>
                <Modal.Body>{clase.horario.map((días) => (
                    <ListGroup>
                        <ListGroup.Item>{días.dia} </ListGroup.Item>
                    </ListGroup>
                ))}</Modal.Body>
                <Button className="pd-2" variant="danger" onClick={handleClose}>Cerrar</Button>
            </Modal>
        </>
    )
}
export default ReservasClases;