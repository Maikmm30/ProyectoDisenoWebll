import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import getCookie from './utils/Cookies';

const columns = [{
  dataField: 'codigo',
  text: 'Código'
}, {
  dataField: 'usuario',
  text: 'Usuario'
}, {
  dataField: 'rol_usuario',
  text: 'Rol de Usuario'
},
{
  dataField: 'fecha',
  text: 'Fecha'
},
{
  dataField: 'descripcion',
  text: 'Descripción'
}];

function Bitacora() {

  const [bitacora, setBitacora] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [bitacoraNuevo, setNuevoBitacora] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/bitacora/").then((res) => {
      setBitacora(res.data);
    });
  }, []);

  const buscarBitacora = () => {
    Axios.post("http://localhost:3001/bitacora/buscar",
      {
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setBitacora(res.data);
      });

  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(row.codigo)///
    }
  };

  const capturaInput = (event) => {
    if (!event.target.value == '') {
      setNuevoBitacora(event.target.value)
    }
  };


  const capturaBuscaBitacora = () => {
    if (nombreBusca !== '') {
      buscarBitacora()
    }
    else {
      alert('Por favor ingrese los datos')
    }
  }

  const recarga = () => {
    window.location.reload();
  }

  const limpiaCajas = () => {
    setCodigo("")
    setNombre("")
  }

  return (
    <div className="container">
      <div class="row" style={{ height: "895px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5 ">
          <h3>Bitacora</h3>
          <i class="fas fa-book fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <button className="p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button>
                </div>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBuscaBitacora}></button>
                </div>
                <div className="col">
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <button className="py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={recarga}></button>
                </div>
              </div>
            </div>
            <div className="col-12 h-80">

              Información de Bitácora
              <div class="form-group row mt-2">
               
                <div class="form-group row mt-2">
                  <label class="col-sm-2 col-form-label">
                    Usuario
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      value={nombreBusca}
                      onChange={(event) => {
                        setNombre(event.target.value);
                      }}
                    />
                  </div>

                </div>
              </div>

              <div class="form-group row mt-2">

                <div class="py-5 px-5 table-scroll"
                  onKeyUp={capturaInput}>
                  <BootstrapTable
                    keyField="id"
                    data={bitacora}
                    columns={columns}
                    rowEvents={rowEvents}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bitacora;
