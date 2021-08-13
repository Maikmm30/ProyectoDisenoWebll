import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarEspecialidad() {

  const [codigoEspecialidad, setCodigoEspecialidad] = useState("");
  const [numeroEspecialidad, setNumeroEspecialidad] = useState("");
  const [nombreEspecialidad, setNombreEspecialidad] = useState("");
  const [ingredientesEspecialidad, setIngredientesEspecialidad] = useState("");
  const [precioEspecialidad, setPrecioEspecialidad] = useState("");
  const [detalleEspecialidad, setDetalleEspecialidad] = useState("");
  const [restauranteEspecialidad, setRestauranteEspecialidad] = useState("Piccola");

  useEffect(() => {
    Axios.get("http://localhost:3001/administracion/especiales/especialidades/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroEspecialidad(num);
      const str = "ESP";
      setCodigoEspecialidad(str+num);
    });
  }, []);

  const enviarDatos = () => {
    console.log(restauranteEspecialidad)
    Axios.post("http://localhost:3001/administracion/especiales/especialidades/agregar",{
      codigoEspecialidad: codigoEspecialidad,
      nombreEspecialidad: nombreEspecialidad,
      ingredientesEspecialidad: ingredientesEspecialidad,
      precioEspecialidad: precioEspecialidad,
      detalleEspecialidad: detalleEspecialidad,
      restauranteEspecialidad: restauranteEspecialidad,
      estadoEspecialidad: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoEspecialidad+': '+getCookie('usuario')+' agregó una especialidad',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '6',
        consecutivoNuevo: numeroEspecialidad,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/administracion/especiales/especialidades/'
  };

  return (
    <div class="container">
      <div class="row" style={{ height: "600px", backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Especialidad</h3>
          <i class="fas fa-table fa-10x text-light"></i>
        </div>
        <div class="col-9" >
          <div class="row">
            <div class="text-center text-light mb-3 col-12 h-35" style={{  backgroundColor: "#C42709"}}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h4>Información de la Especialidad</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" value={codigoEspecialidad} disabled
                        />
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre del Platillo</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" onChange={(event)=>{
                          setNombreEspecialidad(event.target.value);
                        }}/>
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3 ">Restaurante</label>
                    <div class="col-sm-8">
                      <select
                        class="form-control"
                        id="restaurante"
                        defaultValue={'Piccola'}
                        onChange={(event)=>{
                          setRestauranteEspecialidad(event.target.value);
                        }}
                      >
                      <option value="Piccola">Piccola</option>
                      <option value="Turin">Turin</option>
                      <option value="Notte">Notte</option>

                    </select>
                    </div>
                  </div>
                <div class="form-group row mt-2">
                  <label class="col-sm-3">Ingredientes</label>
                  <div class="col-sm-8" >
                    <textarea class="form-control" rows="4" onChange={(event)=>{
                          setIngredientesEspecialidad(event.target.value);
                        }}/>
                  </div>
                </div>

              </div>
              <div class="col">

                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Precio</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" onChange={(event)=>{
                          setPrecioEspecialidad(event.target.value);
                        }}/>
                  </div>
                </div>

                <div class="row mt-3 ">
                  <label class="col-sm-3">Detalle</label>
                  <div class="col-sm-8" >
                    <textarea class="form-control" rows="4"onChange={(event)=>{
                          setDetalleEspecialidad(event.target.value);
                        }}/>
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
export default AgregarEspecialidad;
