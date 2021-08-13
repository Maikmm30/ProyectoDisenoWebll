import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarConsecutivos() {

  const [codigoConsecutivo, setCodigoConsecutivo] = useState("");
  const [numeroConsecutivo, setNumeroConsecutivo] = useState("");
  const [tipoConsecutivo, setTipoConsecutivo] = useState("");
  const [descripcionConsecutivo, setDescripcionConsecutivo] = useState("");
  const [nombreConsecutivo, setNombreConsecutivo] = useState("");
  const [valorConsecutivo, setValorConsecutivo] = useState("");
  const [contienePrefijoConsecutivo, setContienePrefijoConsecutivo] = useState("");
  const [prefijoConsecutivo, setPrefijoConsecutivo] = useState("");

  /*useEffect(() => {
    Axios.get("http://localhost:3001/consecutivos/id").then((res) => {
      console.log(res.data);
      const num = parseInt(res.data[0])+1;
      console.log(num);
      setNumeroConsecutivo(num);
      //const str = "P";
      //setCodigoPais(str+num);
    });
  }, []);*/
  useEffect(() => {
    setTipoConsecutivo('Clientes');
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/consecutivos/agregar",{
      codigoConsecutivo: codigoConsecutivo,
      tipoConsecutivo: tipoConsecutivo,
      descripcionConsecutivo: descripcionConsecutivo,
      nombreConsecutivo: nombreConsecutivo,
      valorConsecutivo: valorConsecutivo,
      contienePrefijoConsecutivo: contienePrefijoConsecutivo,
      prefijoConsecutivo: prefijoConsecutivo,
      estadoConsecutivo: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoConsecutivo+': '+getCookie('usuario')+' agregó un consecutivo',

    });
    window.location.href = 'http://localhost:3000/consecutivos'
  };

  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "650px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Consecutivos</h3>
          <i className="far fa-window-restore fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 bg-success h-35">
              <div className="row row-cols-3 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x " ></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>

            <h4>Información de Consecutivo</h4>
            <div className=" row mt-4 mb-3">
            <div className="row mt-2 mb-3">
              <label className="col-sm-3">Codigo</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" onChange={(event)=>{
                  setCodigoConsecutivo(event.target.value);
                }}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <label className="col-sm-3">Nombre</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" onChange={(event)=>{
                  setNombreConsecutivo(event.target.value);
                }}/>
              </div>
            </div>
              <label className="col-sm-3 ">Tipo de Consecutivo</label>
              
              <div className="col-sm-5">
                <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{
                  setTipoConsecutivo(event.target.value);
                }}>
                  <option>Clientes</option>
                  <option>Personal</option>
                  <option>Proveedores</option>
                  <option>Puestos</option>
                  <option>Eventos o Roles</option>
                  <option>Usuarios</option>
                  <option>Unidades de Medida</option>
                  <option>Países</option>
                  <option>Marcas</option>
                  <option>Comestibles</option>
                  <option>Desechables y Empaques</option>
                  <option>Equipos y Utensilios</option>
                  <option>Limpieza e Higiene</option>
                  <option>Tecnología</option>
                  <option>Restaurantes</option>
                  <option>Buffet</option>
                  <option>Especiales</option>
                  <option>Bebidas Calientes</option>
                  <option>Bebidas Heladas</option>
                  <option>Licores</option>
                  <option>Vinos</option>
                  <option>Empleados</option>
                  <option>Mesas</option>
                  <option>Bitácora</option>
                  <option>Facturas</option>
                </select>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <label className="col-sm-3">Descripción</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" onChange={(event)=>{
                  setDescripcionConsecutivo(event.target.value);
                }}/>
              </div>
            </div>
            <div className=" row mt-2 mb-3">
              <label for="staticEmail" className="col-sm-3">
                Valor Consecutivo
              </label>
              <div className="col-sm-5">
                <input type="text" className="form-control" onChange={(event)=>{
                  setValorConsecutivo(event.target.value);
                }}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <label for="staticEmail" className="col-sm-3">
                Consecutivo posee Prefijo
              </label>
              <div className="col-sm-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                  on={(event)=>{
                    setContienePrefijoConsecutivo(true);
                  }}
                />
              </div>
            </div>
            <div className="row mt-1 mb-3">
              <label for="staticEmail" className="col-sm-3">
                Prefijo
              </label>
              <div className="col-sm-5">
                <input type="text" className="form-control" onChange={(event)=>{
                  setPrefijoConsecutivo(event.target.value);
                }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarConsecutivos;
