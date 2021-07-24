import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarTecnologia() {

  const [codigoTecnologia, setCodigoTecnologia] = useState("");
  const [numeroTecnologia, setNumeroTecnologia] = useState("");
  const [nombreTecnologia, setNombreTecnologia] = useState("");
  const [cantidadTecnologia, setCantidadTecnologia] = useState("");
  const [restauranteTecnologia, setRestauranteTecnologia] = useState("");
  const [marcaTecnologia, setMarcaTecnologia] = useState("");
  const [descripcionTecnologia, setDescripcionTecnologia] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/tecnologia/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroTecnologia(num);
      const str = "TEC";
      setCodigoTecnologia(str+num);
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
        Axios.get("http://localhost:3001/marcas/names").then((res) => {
        console.log('data'+res.data)
        console.log(res.data[1]);
        var array = [];
        for(var k in res.data) {
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
    Axios.post("http://localhost:3001/tecnologia/agregar",{
      codigoTecnologia: codigoTecnologia,
      nombreTecnologia: nombreTecnologia,
      cantidadTecnologia: cantidadTecnologia,
      restauranteTecnologia: restauranteTecnologia,
      marcaTecnologia: marcaTecnologia,
      descripcionTecnologia: descripcionTecnologia,
      estadoTecnologia: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '12',
        consecutivoNuevo: numeroTecnologia,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/tecnologia/'
  };

  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "600px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Tecnología</h3>
          <i class="fas fa-laptop fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x " ></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Información de los artículos
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código
                </label>
                <div class="col-sm-4">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoTecnologia} disabled
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
                        id="restaurante"
                        onChange={(event)=>{
                          setRestauranteTecnologia(event.target.value);
                        }}
                        onClick={(event)=>{
                          setRestauranteTecnologia(event.target.value);
                        }}
                      >
                        
                      </select>
                </div>
                
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre Artículo"
                        onChange={(event)=>{
                          setNombreTecnologia(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Marca
                </label>
                <div class="col-sm-3">
                <select
                        class="form-control"
                        id="marcas"
                        onChange={(event)=>{
                          setMarcaTecnologia(event.target.value);
                        }}
                        onClick={(event)=>{
                          setMarcaTecnologia(event.target.value);
                        }}
                      >
                        
                      </select>
                </div>
                <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Cantidad
                </label>
                <div class="col-sm-4">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Cantidad del artículo"
                        onChange={(event)=>{
                          setCantidadTecnologia(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Descripcion
                </label>
                <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Descripción del artículo"
                        onChange={(event)=>{
                          setDescripcionTecnologia(event.target.value);
                        }}
                      />
                    </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarTecnologia;
