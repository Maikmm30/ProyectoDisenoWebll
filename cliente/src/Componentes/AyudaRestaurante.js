import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const columns = [{
  dataField: 'descripcion',
  text: 'Descripción',
  editable: false
}];


function AyudaRestaurante() {

  const [DatosUsuario, setDatosUsuario] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/ayuda-restaurante/").then((res) => {
      setDatosUsuario(res.data);
    });
  }, []);

  return (
    <div className="container text-center">
      <div className="row " style={{  backgroundColor: "#FF723F"}}>
        <div className="col-3 m-auto  pb-5">
          <h3>Reporte Ayuda de Restaurante</h3>
          <i className="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">

            <div className="col-12 h-80">
            <h4 className="pt-5" style={{  backgroundColor: "#FF723F"}}>Ayuda para el Módulo de Restaurante</h4>
              <div className="form-group row mt-2">
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

        <div className="text-center col-12 h-25" style={{  backgroundColor: "#C42709"}}>
          <div className="row row-cols-5 m-4 text-light">


          </div>
        </div>

      </div>
    </div>
  );
}
export default AyudaRestaurante;
