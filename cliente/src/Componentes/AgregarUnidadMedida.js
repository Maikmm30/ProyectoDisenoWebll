import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarUnidadMedida() {

  const [codigoUnidadMedida, setCodigoUnidadMedida] = useState("");
  const [numeroUnidadMedida, setNumeroUnidadMedida] = useState("");
  const [unidadUnidadMedida, setUnidadUnidadMedida] = useState("");
  const [escalaUnidadMedida, setEscalaUnidadMedida] = useState("");
  const [detalleUnidadMedida, setDetalleUnidadMedida] = useState("");
  const [simbologiaUnidadMedida, setSimbologiaUnidadMedida] = useState("");
  const [simboloUnidadMedida, setSimboloUnidadMedida] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/unidadMedida/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroUnidadMedida(num);
      const str = "UM";
      setCodigoUnidadMedida(str+num);
      setEscalaUnidadMedida('Yotta');
      setDetalleUnidadMedida('Unidades de capacidad');
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/unidadMedida/agregar",{
      codigoUnidadMedida: codigoUnidadMedida,
      unidadUnidadMedida: unidadUnidadMedida,
      escalaUnidadMedida: escalaUnidadMedida,
      detalleUnidadMedida: detalleUnidadMedida,
      simbologiaUnidadMedida: simbologiaUnidadMedida,
      simboloUnidadMedida: simboloUnidadMedida,
      estadoUnidadMedida: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoUnidadMedida+': '+getCookie('usuario')+' agregó una Unidad de Medida',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '17',
        consecutivoNuevo: numeroUnidadMedida,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/unidadMedida/'
  };


  return (
    <div className="container">
      <div className="row " style={{ height: "650px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Unidades de Medida</h3>
          <i className="fas fa-balance-scale-right fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 h-35" style={{backgroundColor: "#C42709" }}>
              <div className="row row-cols-3 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"  onClick={enviarDatos}></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>
            <h4>Información de Unidades de Medida</h4>
            <div className=" row mt-4">
              <div className="col">
                <div className="row">
                  <label className="col-sm-3">Código</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" value={codigoUnidadMedida} disabled/>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                
                </div>
              </div>
            </div>
            <div className=" row mt-4">
              <div className="col">
                <div className="row">
                  <label className="col-sm-3">Unidad</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" onChange={(event)=>{
                          setUnidadUnidadMedida(event.target.value);
                        }}/>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                
                </div>
              </div>
            </div>
            <div className=" row mt-4 ">
              <div className="col">
                <div className="row">
                  <label className="col-sm-3">Escala</label>
                  <div className="col-sm-8">
                  <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setEscalaUnidadMedida(event.target.value);
                        }}
                      >
                        <option>Yotta</option>
                        <option>Zetta</option>
                        <option>Exa</option>
                        <option>Peta</option>
                        <option>Tera</option>
                        <option>Giga</option>
                        <option>Mega</option>
                        <option>Kilo</option>
                        <option>Hecto</option>
                        <option>Deca</option>
                        <option>Deci</option>
                        <option>Centi</option>
                        <option>Mili</option>
                        <option>Micro</option>
                        <option>Nano</option>
                        <option>Pico</option>
                        <option>Femto</option>
                        <option>Atto</option>
                        <option>Zepto</option>
                        <option>Yocto</option>
                      </select> 
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                <label className="col-sm-3">Símbolo</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" onChange={(event)=>{
                          setSimboloUnidadMedida(event.target.value);
                        }}
                        />
                  </div>
                </div>
              </div>
            </div>
            
            <div className=" row mt-4 ">
              <div className="col">
                <div className="row">
                  <label className="col-sm-3">Detalle</label>
                  <div className="col-sm-8">
                  <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(event)=>{
                          setDetalleUnidadMedida(event.target.value);
                        }}
                      >
                        <option>Unidades de capacidad</option>
                        <option>Unidades de densidad</option>
                        <option>Unidades de energía</option>
                        <option>Unidades de fuerza</option>
                        <option>Unidades de longitud</option>
                        <option>Unidades de masa</option>
                        <option>Unidades de potencia</option>
                        <option>Unidades de superficie</option>
                        <option>Unidades de temperatura</option>
                        <option>Unidades de tiempo</option>
                        <option>Unidades de velocidad</option>
                        <option>Unidades de viscosidad</option>
                        <option>Unidades de volumen</option>
                        <option>Unidades eléctricas</option>
                      </select> 
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row ">
                <label className="col-sm-3">Simbología</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" onChange={(event)=>{
                          setSimbologiaUnidadMedida(event.target.value);
                        }}/>
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
export default AgregarUnidadMedida;
