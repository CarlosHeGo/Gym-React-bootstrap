import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacto() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{
      backgroundImage: "url('/fondo_contacto.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="card shadow p-4 w-50 "style={{ background: "rgba(255, 255, 255,0.5)", borderRadius: "10px" }}>
        <div className="card-body" >
          <h1 className="text-center mb-4">Contacto</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Tu email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <button type="button" className="btn btn-warning w-100">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
