import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarComestibles() {

  const [codigoComestible, setCodigoComestible] = useState("");
  const [numeroComestible, setNumeroComestible] = useState("");
  const [nombreComestible, setNombreComestible] = useState("");
  const [cantidadComestible, setCantidadComestible] = useState("");
  const [restauranteComestible, setRestauranteComestible] = useState("");
  const [marcaComestible, setMarcaComestible] = useState("");
  const [tipoDeComestible, setTipoDeComestible] = useState("");
  const [claseDeComestible, setClaseDeComestible] = useState("");
  const [lineaDeComestible, setLineaDeComestible] = useState("");
  const [unidadDeMedidaComestible, setUnidadDeMedidaComestible] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/comestibles/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroComestible(num);
      const str = "COM";
      setCodigoComestible(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              var primerValor = true;
              setTipoDeComestible('Frutas');
              setClaseDeComestible('Fibra');
              setLineaDeComestible('Secos');
              for(var k in res.data) {
                if (primerValor === true){
                  setRestauranteComestible(res.data[k].nombre);
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
            setUnidadDeMedidaComestible(res.data[k].detalle);
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
            setMarcaComestible(res.data[k].nombre);
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
    Axios.post("http://localhost:3001/comestibles/agregar",{
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
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoComestible+': '+getCookie('usuario')+' agregó un comestible',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '9',
        consecutivoNuevo: numeroComestible,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/comestibles/'
  };

  return (
<div class="container">
      <div class="row " style={{ height: "800px" , backgroundColor: "#FF723F"}}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Comestibles</h3>
          <i class="fas fa-pizza-slice fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  h-25"  style={{backgroundColor: "#C42709" }}>
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 h-100">
            Información del Comestible
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoComestible} disabled
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
                        onClick={(event)=>{
                          setTipoDeComestible(event.target.value);
                        }}
                      >
                        <option>Frutas</option>
                        <option>Cacao</option>
                        <option>Carnes</option>
                        <option>Aceites</option>
                        <option>Cereales</option>
                        <option>Vegetales</option>
                        <option>Legumbres</option>
                        <option>Frutos Secos</option>
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
                        id="restaurante"
                        onChange={(event)=>{
                          setRestauranteComestible(event.target.value);
                        }}
                        onClick={(event)=>{
                          setRestauranteComestible(event.target.value);
                        }}
                      >
                        
                      </select>
                </div>
                
              </div>
              
              
            </div>
            <div class="col-6  p-0 ">
              
            <div class="form-group row mt-5">

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
                          setMarcaComestible(event.target.value);
                        }}
                        onClick={(event)=>{
                          setMarcaComestible(event.target.value);
                        }}
                      >
                        
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
                        onClick={(event)=>{
                          setClaseDeComestible(event.target.value);
                        }}
                      >
                        <option>Fibra</option>
                        <option>Grasas</option>
                        <option>Proteinas</option>
                        <option>Vitaminas</option>
                        <option>Minerales</option>
                        <option>Carbohidratos</option>
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
                        onClick={(event)=>{
                          setLineaDeComestible(event.target.value);
                        }}
                      >
                        <option>Secos</option>
                        <option>Congelados</option>
                        <option>Refrigerados</option>
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
                        id="unidadMedida"
                        onChange={(event)=>{
                          setUnidadDeMedidaComestible(event.target.value);
                        }}
                        onClick={(event)=>{
                          setUnidadDeMedidaComestible(event.target.value);
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
export default AgregarComestibles;
