import React from "react";
import Navbar from "../Navbar/navbar";
import "./vista.css";
import ReactPlayer from "react-player";
import { dataCursos } from "../carrusel/data";

function Vista() {
  return (
    <div>
      <Navbar />
      <div className="ContenedorVista">
        {dataCursos.map((item) => (
          <div>
            <div className="contenedor_2">
              <div className="vista_1">
                <ReactPlayer
                  url={item.link}
                  width="60vh"
                  height="40vh"
                />
              </div>
              <div className="descripcion">esta es la descripción</div>
            </div>
            <div className="barra_lateral">esta es la barra lateral</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vista;
