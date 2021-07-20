import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarBebidaHelada() {

  const [codigoBebidaHelada, setCodigoBebidaHelada] = useState("");
  const [nombreBebidaHelada, setNombreBebidaHelada] = useState("");
  const [ingredientesBebidaHelada, setIngredientesBebidaHelada] = useState("");
  const [precioBebidaHelada, setPrecioBebidaHelada] = useState("");
  const [restauranteBebidaHelada, setRestauranteBebidaHelada] = useState("");


  const enviarDatos = () => {
    Axios.post("http://localhost:3001/administracion/especiales/bebidas/helada/agregar-bebida-helada",{
      codigoBebidaHelada: codigoBebidaHelada,
      nombreBebidaHelada: nombreBebidaHelada,
      ingredientesBebidaHelada: ingredientesBebidaHelada,
      precioBebidaHelada: precioBebidaHelada,
      restauranteBebidaHelada: restauranteBebidaHelada,
      estadoBebidaHelada: true,
    });
    window.location.href = 'http://localhost:3000/administracion/especiales/bebidas/helada/'
  };

  return (
    <div class="container">
      <div class="row " style={{ height: "600px" , backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Bebida Helada</h3>
          <i class="fas fa-snowflake fa-10x  text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  text-light h-25" style={{  backgroundColor: "#C42709"}}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>

              </div>
            </div>
            <div class="col-12 h-80">
              Información de la Bebida Helada
                <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código
                  </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                    onChange={(event)=>{
                      setCodigoBebidaHelada(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre
                  </label>
                <div class="col-sm-4">
                <input type="text" className="form-control" onChange={(event)=>{
                  setNombreBebidaHelada(event.target.value);
                }}/>
                </div>
              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Ingredientes
                  </label>
                <div class="col-sm-4" >
                  <textarea
                    class="form-control" 
                    rows="4"
                    onChange={(event)=>{
                      setIngredientesBebidaHelada(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Precio
                  </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                    onChange={(event)=>{
                      setPrecioBebidaHelada(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Restaurante
                </label>
                <div class="col-sm-3">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setRestauranteBebidaHelada(event.target.value);
                        }}
                      >
                        <option>Restaurante 1</option>
                        <option>Restaurante 2</option>
                        <option>Restaurante 3</option>
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
export default AgregarBebidaHelada;
