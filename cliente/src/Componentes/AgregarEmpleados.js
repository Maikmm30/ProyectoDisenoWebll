import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarEmpleados() {

  const [codigoEmpleado, setCodigoEmpleado] = useState("");
  const [cedulaEmpleado, setCedulaEmpleado] = useState("");
  const [numeroEmpleado, setNumeroEmpleado] = useState("");
  const [nombreEmpleado, setNombreEmpleado] = useState("");
  const [primerApellidoEmpleado, setPrimerApellidoEmpleado] = useState("");
  const [segundoApellidoEmpleado, setSegundoApellidoEmpleado] = useState("");
  const [telefono1Empleado, setTelefono1Empleado] = useState("");
  const [telefono2Empleado, setTelefono2Empleado] = useState("");
  const [puestoEmpleado, setPuestoEmpleado] = useState("");
  const [nacionalidadEmpleado, setNacionalidadEmpleado] = useState("");
  const [restauranteEmpleado, setRestauranteEmpleado ] = useState("");

  
  useEffect(() => {
    Axios.get("http://localhost:3001/empleados/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroEmpleado(num);

      const str = "E";
      setCodigoEmpleado(str + num);
     
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        for (var k in res.data) {
          console.log(array.push(res.data[k].nombre));
        }
        for (var i in array) {
          document.getElementById("restaurante").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
   
    });
  
    Axios.get("http://localhost:3001/paises/names").then((res) => {
      console.log('data' + res.data)
      console.log(res.data[1]);
      var array1 = [];
      for (var k in res.data) {
        console.log(array1.push(res.data[k].nombre));
      }
      for (var i in array1) {
        document.getElementById("nacionalidad").innerHTML += "<option value='" + array1[i] + "'>" + array1[i] + "</option>";

      }
    });

  }, []);

  
  const enviarDatos = () => {
    Axios.post("http://localhost:3001/empleados/agregar",{
      codigoEmpleado: codigoEmpleado,
      cedulaEmpleado: cedulaEmpleado,
      numeroEmpleado: numeroEmpleado,
      nombreEmpleado: nombreEmpleado,
      primerApellidoEmpleado: primerApellidoEmpleado,
      segundoApellidoEmpleado: segundoApellidoEmpleado,
      telefono1Empleado: telefono1Empleado,
      telefono2Empleado: telefono2Empleado,
      puestoEmpleado: puestoEmpleado,
      nacionalidadEmpleado: nacionalidadEmpleado,
      restauranteEmpleado: restauranteEmpleado,
      estadoEmpleado: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '10',
        consecutivoNuevo: numeroEmpleado,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/empleados'
  };


    return (
      <div className="container">
        <div className="row " style={{ height: "800px", backgroundColor: "#FF723F" }}>
          <div className="col-3 m-auto text-center pb-5">
            <h3>Empleados</h3>
            <i className="far fa-user fa-10x  text-light"></i>
          </div>
          <div className="col-9">
            <div className="row ">
              <div className="text-center col-12  text-light  h-25" style={{  backgroundColor: "#C42709"}}>
                <div className="row row-cols-4 m-4">
                  <div className="col">
                    <i className=" p-3  rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                  <div className="col ">
                    <i className="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                  </div>
                  <div className="col">
                    <i className=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i>
                  </div>
                  <div className="col">
                    <i className="py-3 px-4  rounded-circle fas fa-images fa-3x"></i>
                  </div>
                </div>
              </div>
              <div className="col-8 " style={{ height: "600px" }}>
                <div>
                  <form>
                    <div className="mt-2 mb-3 row">
                      <h4 className="my-4">Información del Empleado</h4>
                      <label className="col-sm-3">Código </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control"
                        readonly="readonly" value={codigoEmpleado} />
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Cédula de identidad</label>
                      <div className="col-sm-9">
                        <input type="number" className="form-control"
                        onChange={(event)=>{
                          setCedulaEmpleado(event.target.value);
                        }}/>
                      </div>
                    </div>
  
                    <div className="mt-2  mb-3 row">
                      <label className="col-sm-3">Nombre</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" 
                        onChange={(event)=>{
                          setNombreEmpleado(event.target.value);
                        }}/>
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Primer apellido</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control"
                        onChange={(event)=>{
                          setPrimerApellidoEmpleado(event.target.value);
                        }} />
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Segundo apellido</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" 
                        onChange={(event)=>{
                          setSegundoApellidoEmpleado(event.target.value);
                        }}/>
                      </div>
                    </div>
  
                    <div className="row my-3 pt-5">
                      <h5>Teléfonos</h5>
                      <div className="col-sm-4">
                        <label>Oficina</label>
                        <input type="number" className="form-control"
                        onChange={(event)=>{
                          setTelefono1Empleado(event.target.value);
                        }} />
                      </div>
  
  
                      <div className="col-sm-4">
                        <label>Celular</label>
                        <input type="number" className="form-control" 
                        onChange={(event)=>{
                          setTelefono2Empleado(event.target.value);
                        }}/>
                      </div>
                    </div>
                    <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Puesto
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setPuestoEmpleado(event.target.value);
                        }}
                      >
                        <option>Puesto 1</option>
                        <option>Puesto 2</option>
                        <option>Puesto 3</option>
                        <option>Puesto 4</option>
                        <option>Puesto 5</option>
                        <option>Puesto 6</option>
                      </select>
                </div>
              </div>
              <div class="form-group row mt-2">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                Nacionalidad
              </label>
              <div class="col-sm-8">
              <select
                      class="form-control"
                      id="nacionalidad"
                      onChange={(event)=>{
                        setNacionalidadEmpleado(event.target.value);
                      }}
                      onClick={(event)=>{
                        setNacionalidadEmpleado(event.target.value);
                      }}
                    >
                      
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
                          setRestauranteEmpleado(event.target.value);
                        }}
                        onClick={(event)=>{
                          setRestauranteEmpleado(event.target.value);
                        }}
                      >
                        
                      </select>
                </div>
              </div>
                  </form>
                </div>
              </div>
              <div className="col-4 p-0 ">
                <h4 className="m-4">Foto del Empleado</h4>
                <div
                  className="col-sm-4 border border-danger m-auto "
                  style={{ height: "350px", width: "260px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AgregarEmpleados;
  