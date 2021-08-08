import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function AgregarBebidaCaliente() {

  const [codigoBebidaCaliente, setCodigoBebidaCaliente] = useState("");
  const [numeroBebidaCaliente, setNumeroBebidaCaliente] = useState("");
  const [nombreBebidaCaliente, setNombreBebidaCaliente] = useState("");
  const [ingredientesBebidaCaliente, setIngredientesBebidaCaliente] = useState("");
  const [precioBebidaCaliente, setPrecioBebidaCaliente] = useState("");
  const [restauranteBebidaCaliente, setRestauranteBebidaCaliente] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/administracion/especiales/bebidas/calientes/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroBebidaCaliente(num);
      const str = "BC";
      setCodigoBebidaCaliente(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              var primerValor = true;
              for(var k in res.data) {
                if (primerValor === true){
                  setRestauranteBebidaCaliente(res.data[k].nombre);
                  primerValor = false;
                }
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
    Axios.post("http://localhost:3001/administracion/especiales/bebidas/calientes/agregar",{
      codigoBebidaCaliente: codigoBebidaCaliente,
      nombreBebidaCaliente: nombreBebidaCaliente,
      ingredientesBebidaCaliente: ingredientesBebidaCaliente,
      precioBebidaCaliente: precioBebidaCaliente,
      restauranteBebidaCaliente: restauranteBebidaCaliente,
      estadoBebidaCaliente: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '3',
        consecutivoNuevo: numeroBebidaCaliente,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/administracion/especiales/bebidas/calientes/'
  };

  return (
    <div class="container">
      <div class="row " style={{ height: "600px" , backgroundColor: "#FF723F"}}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Bebida Caliente</h3>
          <i class="fas fa-mug-hot fa-10x text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center text-light col-12 h-25" style={{  backgroundColor: "#C42709"}}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><button class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></button></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>

              </div>
            </div>
            <div class="col-12 h-80">
              Información de la Bebida Caliente
                <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código
                  </label>
                <div class="col-sm-4">
                <input type="text" className="form-control" value={codigoBebidaCaliente} disabled/>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre
                  </label>
                <div class="col-sm-4">
                <input type="text" className="form-control" onChange={(event)=>{
                  setNombreBebidaCaliente(event.target.value);
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
                      setIngredientesBebidaCaliente(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Precio
                  </label>
                <div class="col-sm-4">
                <input type="number" className="form-control" onChange={(event)=>{
                  setPrecioBebidaCaliente(event.target.value);
                }}/>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Restaurante
                </label>
                <div class="col-sm-3">
                  <select
                    class="form-control"
                    id="restaurante"
                    onChange={(event)=>{
                      setRestauranteBebidaCaliente(event.target.value);
                    }}
                    onClick={(event)=>{
                      setRestauranteBebidaCaliente(event.target.value);
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
export default AgregarBebidaCaliente;
