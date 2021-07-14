import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarPaises() {

  const [codigoPais, setCodigoPais] = useState("");
  const [nombrePais, setNombrePais] = useState("");

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/paises/agregar",{
      codigoPais: codigoPais,
      nombrePais: nombrePais,
      estadoPais: true,
    });
    window.location.href = 'http://localhost:3000/paises'
  };

  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "650px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Países</h3>
          <i className="fas fa-globe-americas fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 bg-success h-35">
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <button className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></button>
                </div>
                <div className="col ">
                <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"  onClick={enviarDatos}></button>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-images fa-3x"></i>
                </div>
              </div>
            </div>

            <h4>Información de los Países</h4>
          <form onSubmit={enviarDatos}>
            <div className="row mt-2 mb-3">
              <label className="col-sm-3">Código del País</label>
              <div className="col-sm-5">
                <input type="number" className="form-control" onChange={(event)=>{
                  setCodigoPais(event.target.value);
                }}/>
              </div>
            </div>
            <div className=" row mt-2 mb-3">
              <label for="staticEmail" className="col-sm-3">
                Nombre del País
              </label>
              <div className="col-sm-5">
              <input type="text" className="form-control" onChange={(event)=>{
                  setNombrePais(event.target.value);
                }}/>
              </div>
            </div>
            <div className=" row mt-2 mb-3">
              <label for="staticEmail" className="col-sm-3 me-3">
                Bandera del País
              </label>
              <div
                className="col-sm-4 border border-danger "
                style={{ height: "200px", width: "320px" }}
              ></div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarPaises;
