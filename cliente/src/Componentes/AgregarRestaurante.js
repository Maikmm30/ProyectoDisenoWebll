import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarRestaurante() {
  
  const [codigoRestaurante, setCodigoRestaurante] = useState("");
  const [nombreRestaurante, setNombreRestaurante] = useState("");
  const [especialidadRestaurante, setEspecialidadRestaurante] = useState("");
  const [direccionRestaurante, setDireccionRestaurante] = useState("");
  const [telefonoRestaurante, setTelefonoRestaurante] = useState("");
  
  const enviarDatos = () => {
    Axios.post("http://localhost:3001/restaurantes/agregar-restaurantes",{
      codigoRestaurante: codigoRestaurante,
      nombreRestaurante: nombreRestaurante,
      especialidadRestaurante: especialidadRestaurante,
      direccionRestaurante: direccionRestaurante,
      telefonoRestaurante: telefonoRestaurante,
      estadoRestaurante: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoRestaurante+': '+getCookie('usuario')+' agregó un restaurante',

    });
    window.location.href = 'http://localhost:3000/restaurantes'
  };
  
  return (
    <div class="container">
      <div class="row " style={{ height: "600px", backgroundColor: "#FF723F"  }}>
        <div class="col-3 m-auto text-center pb-5" >
          <h3>Agregar Restaurante</h3>
          <i class="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div class="col-9" >
          <div class="row">
            <div class="text-center text-light mb-3 col-12 h-35" style={{  backgroundColor: "#C42709"}}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4 rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="py-2 px-3 fas  rounded-circle fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row ">
              <div class="col">
                <h4>Información del Restaurante</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                  setCodigoRestaurante(event.target.value);
                }}/>
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" onChange={(event)=>{
                  setNombreRestaurante(event.target.value);
                }}/>
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Especialidad</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" onChange={(event)=>{
                  setEspecialidadRestaurante(event.target.value);
                }}/>
                  </div>
                </div>

                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Dirección</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" onChange={(event)=>{
                  setDireccionRestaurante(event.target.value);
                }}/>
                  </div>
                </div>

                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Telefono</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                  setTelefonoRestaurante(event.target.value);
                }}/>
                  </div>
                </div>

                <div class="row mt-4 mb-3">

                  <div class="col-sm-1">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                  
                    <label class="col-sm-5">Activo</label>

                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarRestaurante;
