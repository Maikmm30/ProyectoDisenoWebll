import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarComestibles() {

  const [codigoComestible, setCodigoComestible] = useState("");
  const [nombreComestible, setNombreComestible] = useState("");
  const [cantidadComestible, setCantidadComestible] = useState("");
  const [restauranteComestible, setRestauranteComestible] = useState("");
  const [marcaComestible, setMarcaComestible] = useState("");
  const [tipoDeComestible, setTipoDeComestible] = useState("");
  const [claseDeComestible, setClaseDeComestible] = useState("");
  const [lineaDeComestible, setLineaDeComestible] = useState("");
  const [unidadDeMedidaComestible, setUnidadDeMedidaComestible] = useState("");



  const enviarDatos = () => {
    Axios.post("http://localhost:3001/agregarComestibles",{
      codigoComestible: codigoComestible,
      nombreComestible: nombreComestible,
      cantidadComestible: cantidadComestible,
      restauranteComestible: restauranteComestible,
      marcaComestible: marcaComestible,
      tipoDeComestible: tipoDeComestible,
      claseDeComestible: claseDeComestible,
      lineaDeComestible: lineaDeComestible,
      unidadDeMedidaComestible: unidadDeMedidaComestible,
      estadoComestible: true,
    });
    window.location.href = 'http://localhost:3000/comestibles/'
  };

  return (
<div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Comestibles</h3>
          <i class="fas fa-pizza-slice fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 bg-danger h-100">
            Información del Comestible
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="number"
                        class="form-control"
                        onChange={(event)=>{
                          setCodigoComestible(event.target.value);
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
                        placeholder="Nombre Comestible"
                        onChange={(event)=>{
                          setNombreComestible(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Cantidad
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cantidad Comestible"
                        onChange={(event)=>{
                          setCantidadComestible(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Tipo de Comestible
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setTipoDeComestible(event.target.value);
                        }}
                      >
                        <option>Comestible 1</option>
                        <option>Comestible 2</option>
                        <option>Comestible 3</option>
                        <option>Comestible 4</option>
                        <option>Comestible 5</option>
                        <option>Comestible 6</option>
                      </select>
                </div>
                
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Restaurante
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setRestauranteComestible(event.target.value);
                        }}
                      >
                        <option>Restaurante 1</option>
                        <option>Restaurante 2</option>
                        <option>Restaurante 3</option>
                      </select>
                </div>
                
              </div>
              
              
            </div>
            <div class="col-6 bg-danger p-0 border border-danger">
              
            <div class="form-group row mt-5">

            </div>
            <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Marca
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setMarcaComestible(event.target.value);
                        }}
                      >
                        <option>Marca 1</option>
                        <option>Marca 2</option>
                        <option>Marca 3</option>
                        <option>Marca 4</option>
                        <option>Marca 5</option>
                        <option>Marca 6</option>
                      </select>
                </div>
                
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Clase de Comestible
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setClaseDeComestible(event.target.value);
                        }}
                      >
                        <option>Clase de Comestible 1</option>
                        <option>Clase de Comestible 2</option>
                        <option>Clase de Comestible 3</option>
                      </select>
                </div>
                
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Línea de Comestible
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setLineaDeComestible(event.target.value);
                        }}
                      >
                        <option>Línea de Comestible 1</option>
                        <option>Línea de Comestible 2</option>
                        <option>Línea de Comestible 3</option>
                        <option>Línea de Comestible 4</option>
                      </select>
                </div>
                
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Unidad de Medida
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setUnidadDeMedidaComestible(event.target.value);
                        }}
                      >
                        <option>Unidad de Medida 1</option>
                        <option>Unidad de Medida 2</option>
                        <option>Unidad de Medida 3</option>
                      </select>
                </div>
                
              </div>


            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarComestibles;
