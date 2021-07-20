import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarLimpieza() {

  const [codigoLimpieza, setCodigoLimpieza] = useState("");
  const [nombreLimpieza, setNombreLimpieza] = useState("");
  const [cantidadLimpieza, setCantidadLimpieza] = useState("");
  const [restauranteLimpieza, setRestauranteLimpieza] = useState("");
  const [marcaLimpieza, setMarcaLimpieza] = useState("");
  const [tipoDeArticuloLimpieza, setTipoDeArticuloLimpieza] = useState("");
  const [unidadDeMedidaLimpieza, setUnidadDeMedidaLimpieza] = useState("");
  const [descripcionLimpieza, setDescripcionLimpieza] = useState("");
  const [cantidadDeMedidaLimpieza, setCantidadDeMedidaLimpieza] = useState("");

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/agregarLimpieza",{
      codigoLimpieza: codigoLimpieza,
      nombreLimpieza: nombreLimpieza,
      cantidadLimpieza: cantidadLimpieza,
      restauranteLimpieza: restauranteLimpieza,
      marcaLimpieza: marcaLimpieza,
      tipoDeArticuloLimpieza: tipoDeArticuloLimpieza,
      unidadDeMedidaLimpieza: unidadDeMedidaLimpieza,
      descripcionLimpieza: descripcionLimpieza,
      cantidadDeMedidaLimpieza: cantidadDeMedidaLimpieza,
      estadoLimpieza: true,
    });
    window.location.href = 'http://localhost:3000/limpieza/'
  };


  return (
<div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Limpieza e Higiene</h3>
          <i class="fas fa-pump-soap fa-10x"></i>
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
            Información de los artículos de limpieza
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="number"
                        class="form-control"
                        onChange={(event)=>{
                          setCodigoLimpieza(event.target.value);
                        }}
                      />
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
                          setRestauranteLimpieza(event.target.value);
                        }}
                      >
                        <option>Restaurante 1</option>
                        <option>Restaurante 2</option>
                        <option>Restaurante 3</option>
                      </select>
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
                          setNombreLimpieza(event.target.value);
                        }}
                      />
                    </div>
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
                          setMarcaLimpieza(event.target.value);
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
                  Cantidad
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cantidad Comestible"
                        onChange={(event)=>{
                          setCantidadLimpieza(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                Descripción
                </label>
                <div class="col-sm-8">
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Descripcion"
                        rows="3"
                        onChange={(event)=>{
                          setDescripcionLimpieza(event.target.value);
                        }}
                      />
                </div>
                </div>
              
              
              
              
            </div>
            <div class="col-6 bg-danger p-0 border border-danger">
              
            <div class="form-group row mt-5">

            </div>
            <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Tipo de Artículo
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setTipoDeArticuloLimpieza(event.target.value);
                        }}
                      >
                        <option>Tipo de Artículo 1</option>
                        <option>Tipo de Artículo 2</option>
                        <option>Tipo de Artículo 3</option>
                        <option>Tipo de Artículo 4</option>
                        <option>Tipo de Artículo 5</option>
                        <option>Tipo de Artículo 6</option>
                      </select>
                </div>
                
              </div>
              
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Cantidad de Medida
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cantidad de Medida"
                        onChange={(event)=>{
                          setCantidadDeMedidaLimpieza(event.target.value);
                        }}
                      />
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
                          setUnidadDeMedidaLimpieza(event.target.value);
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
export default AgregarLimpieza;
