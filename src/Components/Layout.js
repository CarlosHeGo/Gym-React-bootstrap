import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navegacion from "./Navegacion";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App" style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <header>
        <Navegacion />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
