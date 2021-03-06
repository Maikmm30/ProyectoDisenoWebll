import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarLimpieza() {

  const [codigoLimpieza, setCodigoLimpieza] = useState("");
  const [numeroLimpieza, setNumeroLimpieza] = useState("");
  const [nombreLimpieza, setNombreLimpieza] = useState("");
  const [cantidadLimpieza, setCantidadLimpieza] = useState("");
  const [restauranteLimpieza, setRestauranteLimpieza] = useState("");
  const [marcaLimpieza, setMarcaLimpieza] = useState("");
  const [tipoDeArticuloLimpieza, setTipoDeArticuloLimpieza] = useState("");
  const [unidadDeMedidaLimpieza, setUnidadDeMedidaLimpieza] = useState("");
  const [descripcionLimpieza, setDescripcionLimpieza] = useState("");
  const [cantidadDeMedidaLimpieza, setCantidadDeMedidaLimpieza] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/limpieza/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroLimpieza(num);
      const str = "LH";
      setCodigoLimpieza(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              var primerValor = true;
              setTipoDeArticuloLimpieza('Tipo de Artículo 1');
              for(var k in res.data) {
                if (primerValor === true){
                  setRestauranteLimpieza(res.data[k].nombre);
                  primerValor = false;
                }
                console.log(array.push(res.data[k].nombre));
             }
             for(var i in array)
             { 
                 document.getElementById("restaurante").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
 
             }
            });  
        Axios.get("http://localhost:3001/unidadMedida/names").then((res) => {
        console.log('data'+res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for(var k in res.data) {
          if (primerValor === true){
            setUnidadDeMedidaLimpieza(res.data[k].detalle);
            primerValor = false;
          }
          console.log(array.push(res.data[k].detalle));
        }
        for(var i in array)
        { 
            document.getElementById("unidadMedida").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 

        }
      }); 
      Axios.get("http://localhost:3001/marcas/names").then((res) => {
        console.log('data'+res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for(var k in res.data) {
          if (primerValor === true){
            setMarcaLimpieza(res.data[k].nombre);
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
    Axios.post("http://localhost:3001/limpieza/agregar",{
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
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoLimpieza+': '+getCookie('usuario')+' agregó un artículo de limpieza',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '11',
        consecutivoNuevo: numeroLimpieza,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/limpieza/'
  };


  return (
<div class="container">
      <div class="row " style={{ height: "800px" , backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Limpieza e Higiene</h3>
          <i class="fas fa-pump-soap fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  h-25" style={{backgroundColor: "#C42709" }}>
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6  h-100">
            Información de los artículos de limpieza
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoLimpieza} disabled
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
                          setRestauranteLimpieza(event.target.value);
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
                        id="marcas"
                        onChange={(event)=>{
                          setMarcaLimpieza(event.target.value);
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
            <div class="col-6 p-0">
              
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
                        onClick={(event)=>{
                          setTipoDeArticuloLimpieza(event.target.value);
                        }}
                      >
                        <option>Liquido</option>
                        <option>No Liquido</option>
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
                        id="unidadMedida"
                        onChange={(event)=>{
                          setUnidadDeMedidaLimpieza(event.target.value);
                        }}
                      >
                        
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
