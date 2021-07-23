import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const columns = [{
  dataField: 'descripcion',
  text: 'Descripción de actividades',
  editable: false
}];


function AyudaVinos() {

  const [DatosUsuario, setDatosUsuario] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/ayuda-vinos/").then((res) => {
      setDatosUsuario(res.data);
    });
  }, []);

  return (
    <div class="container text-center">
      <div class="row"  style={{  backgroundColor: "#FF723F"}}>
        <div class="col-3 m-auto pb-5">
          <h3>Reporte Ayuda de Vinos</h3>
          <i class="fas fa-wine-glass-alt fa-10x text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">

            <div class="col-12 h-80">
            <h4 className="pt-5" style={{  backgroundColor: "#FF723F"}}>Ayuda para los Tipos de Vinos</h4>
              <div class="form-group row mt-2">
                <div class="py-5 px-5">
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

        <div class="text-center col-12  h-25" style={{  backgroundColor: "#C42709"}}>
          <div class="row row-cols-5 m-4 text-light">
          </div>
        </div>

      </div>
    </div>
  );
}
export default AyudaVinos;
