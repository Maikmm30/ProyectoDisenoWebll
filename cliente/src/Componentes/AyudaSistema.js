import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";


const columns = [{
  dataField: 'codigo',
  text: 'Código'
}, {
  dataField: 'codigo_usuario',
  text: 'Codigo de Usuario'
}, {
  dataField: 'fecha',
  text: 'Fecha'
}, {
  dataField: 'descripcion',
  text: 'Descripcion'
}];


function AyudaSistema() {

  const [DatosUsuario, setDatosUsuario] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/ayuda-sistema/").then((res) => {
      setDatosUsuario(res.data);
    });
  }, []);


  return (
    <div className="container text-center">
      <div className="row " style={{ backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Reporte Ayuda de Sistema</h3>
          <i className="fas fa-question-circle fa-10x text-light" ></i>
        </div>
        <div className="col-9">
          <div className="row h-75">

            <div className="col-12 h-80">
              <h4 className="pt-5" style={{ backgroundColor: "#FF723F" }}>Ayuda para el Módulo de Administración del Sistema</h4>
              <div className="form-group">
                <div className="py-5 px-5">
                  <BootstrapTable
                    keyField="id"
                    data={DatosUsuario}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
          <div className="row row-cols-5 m-4 text-light">

            <div className="col"><i className="fas fa-arrow-circle-left fa-4x "></i></div>
            <div className="col"><i className="fas fa-arrow-circle-right fa-4x"></i></div>
            <div className="col"><i className="fas fa-times-circle fa-4x"></i></div>
            <div className="col"><i className="fas fa-search fa-4x"></i></div>
            <div className="col"><i className="fas fa-print fa-4x"></i></div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default AyudaSistema;
