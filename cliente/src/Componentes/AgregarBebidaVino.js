import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarBebidaVino() {

  const [codigoBebidaVino, setCodigoBebidaVino] = useState("");
  const [numeroBebidaVino, setNumeroBebidaVino] = useState("");
  const [nombreBebidaVino, setNombreBebidaVino] = useState("");
  const [marcaBebidaVino, setMarcaBebidaVino] = useState("");
  const [nacionalidadBebidaVino, setNacionalidadBebidaVino] = useState("");
  const [anioCosechaBebidaVino, setAnioBebidaVino] = useState("");
  const [precioUnitarioBebidaVino, setPrecioUnitarioBebidaVino] = useState("");
  const [precioBotellaBebidaVino, setPrecioBotellaBebidaVino] = useState("");
  const [restauranteBebidaVino, setRestauranteBebidaVino] = useState("");
  const [cantidadBebidaVino, setCantidadBebidaVino] = useState("");
  const [descripcionBebidaVino, setDescripcionBebidaVino] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/administracion/especiales/bebidas/vinos/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroBebidaVino(num);
      const str = "BV";
      setCodigoBebidaVino(str+num);
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
        Axios.get("http://localhost:3001/paises/names").then((res) => {
        console.log('data'+res.data)
        console.log(res.data[1]);
        var array = [];
        for(var k in res.data) {
          console.log(array.push(res.data[k].nombre));
        }
        for(var i in array)
        { 
            document.getElementById("nacionalidad").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 

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
    Axios.post("http://localhost:3001/administracion/especiales/bebidas/vinos/agregar",{
      codigoBebidaVino: codigoBebidaVino,
      nombreBebidaVino: nombreBebidaVino,
      marcaBebidaVino: marcaBebidaVino,
      nacionalidadBebidaVino: nacionalidadBebidaVino,
      anioCosechaBebidaVino: anioCosechaBebidaVino,
      precioUnitarioBebidaVino: precioUnitarioBebidaVino,
      precioBotellaBebidaVino: precioBotellaBebidaVino,
      restauranteBebidaVino: restauranteBebidaVino,
      cantidadBebidaVino: cantidadBebidaVino,
      descripcionBebidaVino: descripcionBebidaVino,
      estadoBebidaVino: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '5',
        consecutivoNuevo: numeroBebidaVino,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/administracion/especiales/bebidas/vinos/'
  };

  return (
    <div class="container">
      <div class="row " style={{ height: "700px" , backgroundColor: "#FF723F"}}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Bebida Vino</h3>
          <i class="fas fa-wine-glass-alt fa-10x text-light"></i>
        </div>
        <div class="col-9" >
          <div class="row">
            <div class="text-center mb-3 col-12 text-light h-35" style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h4>Información del Vino</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" value={codigoBebidaVino} disabled/>
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" onChange={(event)=>{
                        setNombreBebidaVino(event.target.value);
                      }}/>
                  </div>
                </div>
                <div class=" row mt-2 mb-2">
                  <label class="col-sm-3">Marca</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="marcas"
                      onChange={(event)=>{
                        setMarcaBebidaVino(event.target.value);
                      }}
                      onClick={(event)=>{
                        setMarcaBebidaVino(event.target.value);
                      }}
                    >
                      
                    </select>
                  </div>
                </div>

                <div class="form-group row mt-3 mb-2">
                  <label class="col-sm-3">Nacionalidad</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="nacionalidad"
                      onChange={(event)=>{
                        setNacionalidadBebidaVino(event.target.value);
                      }}
                      onClick={(event)=>{
                        setNacionalidadBebidaVino(event.target.value);
                      }}
                    >
              
                    </select>
                  </div>

                </div>

                <div class="row mt-4 mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="col-sm-2">Precio Unitario</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setPrecioUnitarioBebidaVino(event.target.value);
                      }}/>
                  </div>
                </div>

                <div class="row mt-4 mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="col-sm-2">Precio Botella</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setPrecioBotellaBebidaVino(event.target.value);
                      }}/>
                  </div>
                </div>

                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Año de la Cosecha</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setAnioBebidaVino(event.target.value);
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
                      id="restaurante"
                      onChange={(event)=>{
                        setRestauranteBebidaVino(event.target.value);
                      }}
                      onClick={(event)=>{
                        setRestauranteBebidaVino(event.target.value);
                      }}
                    >
                    
                    </select>
                  </div>

                </div>
                <div class="row mt-3 mb-2">
                  <label class="col-sm-3 ">Cantidad</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                        setCantidadBebidaVino(event.target.value);
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
                        setDescripcionBebidaVino(event.target.value);
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
export default AgregarBebidaVino;
