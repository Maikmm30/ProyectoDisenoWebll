import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarEmpaques() {

  const [codigoEmpaque, setCodigoEmpaque] = useState("");
  const [numeroEmpaque, setNumeroEmpaque] = useState("");
  const [nombreEmpaque, setNombreEmpaque] = useState("");
  const [cantidadEmpaque, setCantidadEmpaque] = useState("");
  const [restauranteEmpaque, setRestauranteEmpaque] = useState("");
  const [marcaEmpaque, setMarcaEmpaque] = useState("");
  const [descripcionEmpaque, setDescripcionEmpaque] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/empaques/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroEmpaque(num);
      const str = "DE";
      setCodigoEmpaque(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              for(var k in res.data) {
                console.log(array.push(res.data[k].nombre));
             }
             for(var i in array)
             { 
                 document.getElementById("restaurante").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
 
             }
            });  
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/empaques/agregar",{
      codigoEmpaque: codigoEmpaque,
      nombreEmpaque: nombreEmpaque,
      cantidadEmpaque: cantidadEmpaque,
      restauranteEmpaque: restauranteEmpaque,
      marcaEmpaque: marcaEmpaque,
      descripcionEmpaque: descripcionEmpaque,
      estadoEmpaque: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '10',
        consecutivoNuevo: numeroEmpaque,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/empaques/'
  };

  return (
<div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Desechables y Empaques</h3>
          <i class="fas fa-box-open fa-10x"></i>
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
            Información del Empaque
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoEmpaque} disabled
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
                        id="restaurante"
                        onChange={(event)=>{
                          setRestauranteEmpaque(event.target.value);
                        }}
                        onClick={(event)=>{
                          setRestauranteEmpaque(event.target.value);
                        }}
                      >
                        
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
                        placeholder="Nombre Empaque"
                        onChange={(event)=>{
                          setNombreEmpaque(event.target.value);
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
                          setMarcaEmpaque(event.target.value);
                        }}
                        onClick={(event)=>{
                          setMarcaEmpaque(event.target.value);
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
                          setCantidadEmpaque(event.target.value);
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
                          setDescripcionEmpaque(event.target.value);
                        }}
                      />
                </div>
                </div>
              
              
            </div>
            <div class="col-6 bg-danger p-0 border border-danger">
              
            


            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarEmpaques;
