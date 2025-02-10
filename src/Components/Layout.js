import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navegacion from "./Navegacion";

const Layout = () => {
  return (
    <div className="App" style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <header>
        <Navegacion />
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="text-center py-4">
        <p>TODO: Implementar footer como componente.</p>
      </footer>
    </div>
  );
};

export default Layout;

