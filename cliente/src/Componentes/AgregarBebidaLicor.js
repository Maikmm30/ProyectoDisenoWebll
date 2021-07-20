import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarBebidaLicor() {

  const [codigoBebidaLicor, setCodigoBebidaLicor] = useState("");
  const [nombreBebidaLicor, setNombreBebidaLicor] = useState("");
  const [marcaBebidaLicor, setMarcaBebidaLicor] = useState("");
  const [nacionalidadBebidaLicor, setNacionalidadBebidaLicor] = useState("");
  const [tipoVentaBebidaLicor, setTipoVentaBebidaLicor] = useState("");
  const [precioUnitarioBebidaLicor, setPrecioUnitarioBebidaLicor] = useState("");
  const [precioBotellaBebidaLicor, setPrecioBotellaBebidaLicor] = useState("");
  const [restauranteBebidaLicor, setRestauranteBebidaLicor] = useState("");
  const [descripcionBebidaLicor, setDescripcionBebidaLicor] = useState("");
  const [cantidadBebidaLicor, setCantidadBebidaLicor] = useState("");

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/administracion/especiales/bebidas/licores/agregar-bebida-licor",{
      codigoBebidaLicor: codigoBebidaLicor,
      nombreBebidaLicor: nombreBebidaLicor,
      marcaBebidaLicor: marcaBebidaLicor,
      nacionalidadBebidaLicor: nacionalidadBebidaLicor,
      tipoVentaBebidaLicor: 'tipoVentaBebidaLicor',
      precioUnitarioBebidaLicor: precioUnitarioBebidaLicor,
      precioBotellaBebidaLicor: precioBotellaBebidaLicor,
      restauranteBebidaLicor: restauranteBebidaLicor,
      descripcionBebidaLicor: descripcionBebidaLicor,
      cantidadBebidaLicor: cantidadBebidaLicor,
      estadoBebidaLicor: true,
    });
    window.location.href = 'http://localhost:3000/administracion/especiales/bebidas/licores/'
  };



  return (
    <div class="container">
      <div class="row " style={{ height: "600px", backgroundColor: "#FF723F"  }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Bebida Licor</h3>
          <i class="fas fa-beer fa-10x text-light "></i>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="text-center mb-3 col-12 text-light h-35"  style={{ backgroundColor: "#C42709"}}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h4>Información del Licor</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setCodigoBebidaLicor(event.target.value);
                }}/>
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre</label>
                  <div class="col-sm-8">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setNombreBebidaLicor(event.target.value);
                }}/>
                  </div>
                </div>
                <div class=" row mt-2 mb-2">
                  <label class="col-sm-3">Marca</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(event)=>{
                        setMarcaBebidaLicor(event.target.value);
                      }}
                    >
                      <option>Marca 1</option>
                      <option>Marca 2</option>
                      <option>Marca 3</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row mt-3 mb-2">
                  <label class="col-sm-3">Nacionalidad</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(event)=>{
                        setNacionalidadBebidaLicor(event.target.value);
                      }}
                    >
                      <option>Nacionalidad 1</option>
                      <option>Nacionalidad 2</option>
                      <option>Nacionalidad 3</option>
                    </select>
                  </div>

                </div>

                <div class="row mt-4 mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="col-sm-2">Precio Unitario</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setPrecioUnitarioBebidaLicor(event.target.value);
                      }}/>
                  </div>
                </div>

                <div class="row mt-4 mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="col-sm-2">Precio Botella</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setPrecioBotellaBebidaLicor(event.target.value);
                      }}/>
                  </div>
                </div>

              </div>
              <div class="col">

                <div class="form-group row mt-5 mb-2">
                  <label class="col-sm-3 ">Restaurante</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(event)=>{
                        setRestauranteBebidaLicor(event.target.value);
                      }}
                    >
                      <option>Restaurante 1</option>
                      <option>Restaurante 2</option>
                      <option>Restaurante 3</option>
                    </select>
                  </div>

                </div>
                <div class="row mt-3 mb-2">
                  <label class="col-sm-3 ">Cantidad</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setCantidadBebidaLicor(event.target.value);
                      }}/>
                  </div>
                </div>
                <div class="row mt-3 ">
                  <label class="col-sm-3">Descripcion</label>
                  <div class="col-sm-8" >
                    <textarea
                      class="form-control"
                      rows="4"
                      onChange={(event)=>{
                        setDescripcionBebidaLicor(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <label class="form-label" for="customFile">Seleccione una imagen</label>
                <input type="file" class="form-control" id="customFile" />

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarBebidaLicor;
