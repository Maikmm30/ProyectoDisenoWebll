import { Container, Row, Col } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarPuesto() {

  const [codigoPuesto, setCodigoPuesto] = useState("");
  const [nombrePuesto, setNombrePuesto] = useState("");
  const [rolPuesto, setRolPuesto] = useState("");
  const [relacionPuesto, setRelacionPuesto] = useState("");

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/agregarPuestos",{
      codigoPuesto: codigoPuesto,
      nombrePuesto: nombrePuesto,
      rolPuesto: rolPuesto,
      relacionPuesto: relacionPuesto,
      estadoPuesto: true,
    });
    window.location.href = 'http://localhost:3000/puestos'
  };

  return (
    <div class="container">
      <div class="row" style={{ height: "600px", backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Puestos</h3>
          <i class="fas fa-user fa-10x  text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  text-light h-25"style={{  backgroundColor: "#C42709"}}>
              <div class="row row-cols-3 m-4">
                <div class="col">
                  <i class=" p-3  rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div class="col ">
                  <i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>
            <div class="col-9  h-100 pt-5">
              Información del Puesto
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    onChange={(event)=>{
                      setCodigoPuesto(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre Empaque"
                    onChange={(event)=>{
                      setNombrePuesto(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Rol en el Restaurante
                </label>
                <div class="col-sm-8">
                  <select class="form-control" id="exampleFormControlSelect1" onChange={(event)=>{
                  setRolPuesto(event.target.value);
                }}>
                    <option>Rol 1</option>
                    <option>Rol 2</option>
                    <option>Rol 3</option>
                  </select>
                </div>
              </div>
              <div class="form-check col-12">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(event)=>{
                    setRelacionPuesto(event.target.value);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Interno al Restaurante
                </label>
              </div>
              <div class="form-check col-12">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(event)=>{
                    setRelacionPuesto(event.target.value);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Externo al Restaurante
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarPuesto;
