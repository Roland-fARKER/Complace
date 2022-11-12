import React from "react";
import Navbar from "../Navbar/navbar";
import "./vistaStyle.css";

function Vista() {
  return (
    <div>
      <Navbar />
      <div className="ContenedorVista">
          <div>
            <div className="contenedor_2">
              <div className="vista_1">
                  vista 1
              </div>
                  <div className="descripcion">
                    esta es la descripción
                  </div>
              </div>
              <div className="barra_lateral">
                esta es la barra lateral
              </div>
          </div>
      </div>
    </div>
  );
}

export default Vista;
