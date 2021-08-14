import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarUtensilios() {
  
  const [codigoEquipo, setCodigoEquipo] = useState("");
  const [numeroEquipo, setNumeroEquipo] = useState("");
  const [nombreEquipo, setNombreEquipo] = useState("");
  const [cantidadEquipo, setCantidadEquipo] = useState("");
  const [restauranteEquipo, setRestauranteEquipo] = useState("");
  const [marcaEquipo, setMarcaEquipo] = useState("");
  const [descripcionEquipo, setDescripcionEquipo] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/utensilio/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroEquipo(num);
      const str = "EU";
      setCodigoEquipo(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              var primerValor = true;
              for(var k in res.data) {
                if (primerValor === true){
                  setRestauranteEquipo(res.data[k].nombre);
                  primerValor = false;
                }
                console.log(array.push(res.data[k].nombre));
             }
             for(var i in array)
             { 
                 document.getElementById("restaurante").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
 
             }
            });  
        Axios.get("http://localhost:3001/marcas/names").then((res) => {
        console.log('data'+res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for(var k in res.data) {
          if (primerValor === true){
            setMarcaEquipo(res.data[k].nombre);
            primerValor = false;
          }
          console.log(array.push(res.data[k].nombre));
        }
        for(var i in array)
        { 
            document.getElementById("marcas").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 

        }
      });
    });
  }, []);


  const enviarDatos = () => {
    Axios.post("http://localhost:3001/utensilio/agregar",{
      codigoEquipo: codigoEquipo,
      nombreEquipo: nombreEquipo,
      cantidadEquipo: cantidadEquipo,
      restauranteEquipo: restauranteEquipo,
      marcaEquipo: marcaEquipo,
      descripcionEquipo: descripcionEquipo,
      estadoEquipo: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoEquipo+': '+getCookie('usuario')+' agregó un utensilio',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '13',
        consecutivoNuevo: numeroEquipo,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/utensilio/'
  };

  return (
<div class="container">
      <div class="row" style={{ height: "800px" , backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Utensilios y Equipos</h3>
          <i class="fas fa-utensil-spoon fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 h-25" style={{backgroundColor: "#C42709" }}>
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 h-100">
            Información del Utensilio
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoEquipo} disabled
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
                          setRestauranteEquipo(event.target.value);
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
                        placeholder="Nombre Utensilio"
                        onChange={(event)=>{
                          setNombreEquipo(event.target.value);
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
                        id="marcas"
                        onChange={(event)=>{
                          setMarcaEquipo(event.target.value);
                        }}
                      >
                        
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
                        placeholder="Cantidad Utensilios"
                        onChange={(event)=>{
                          setCantidadEquipo(event.target.value);
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
                        onChange={(event)=>{
                          setDescripcionEquipo(event.target.value);
                        }}
                        rows="3"
                      />
                </div>
                </div>
              
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarUtensilios;
