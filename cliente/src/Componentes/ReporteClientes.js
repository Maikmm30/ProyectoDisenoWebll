import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {
    Link
  } from "react-router-dom";

  import Axios from "axios";
  import React, { useState, useEffect } from "react";
  
  
function ReporteClientes() {
  var d = new Date();
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  var horastring = d.getHours() + ":" + d.getMinutes();

  const [reporte, setReporte] = useState([]);
  var [cantidadClientes, setCantidad] = useState("");
  var [fechaActual, setFecha] = useState(datestring);
  var [horaActual, setHora] = useState(horastring);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [reporteNuevo, reporteProveedor] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  const columns = [
    {
      dataField: "codigo",
      text: "Código",
    },
    {
      dataField: "nombreCompleto",
      text: "Nombre Completo",
    },
    {
      dataField: "montoPagado",
      text: "Monto Pagado",
    },
    {
      dataField: "detalle",
      text: "Detalle",
    },
    {
      dataField: "fecha",
      text: "Fecha",
    },
    {
      dataField: "reservacion",
      text: "Reservación",
    },
    {
      dataField: "barra",
      text: "Barra",
    },
    {
      dataField: "restaurante",
      text: "Restaurante",
    },
  ];

  useEffect(() => {
    Axios.get("http://localhost:3001/clienteReporte/").then((res) => {
      setReporte(res.data);
    });

    Axios.get("http://localhost:3001/clienteReporte/cuentaClientes").then((res) => {
      setCantidad(res.data);
    });


  }, []);
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "700px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Reporte de Clientes</h3>
          <i class="fas fa-users fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-50">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-4 m-4">
                    
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Lista de Clientes
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm col-form-label">
                  Fecha:
                </label>
                <div class="col-sm-2">
                <label for="staticEmail" class="col-sm col-form-label">
                {fechaActual}
                </label>
                    </div>
                    <label for="staticEmail" class="col-sm col-form-label">
                  Hora:
                </label>
                <div class="col-sm">
                <label for="staticEmail" class="col-sm col-form-label">
                  {horastring}
                </label>
                    </div>
                    <label for="staticEmail" class="col-sm-4 col-form-label">
                  Cantidad de Clientes a la Fecha
                </label>
                <div class="col-sm-2">
                <label for="staticEmail" class="col-sm col-form-label">
                 {cantidadClientes}
                </label>
                    </div>
              </div>
              
              
                            
              <div class="form-group row mt-2">
                
                <div class="col-sm-12">
                <BootstrapTable
                    keyField="id"
                    data={ reporte }
                    columns={ columns }
                    cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
                />
                </div>
                
              <div class="text-center col-12 bg-success h-15">
                <div class="row row-cols-2 m-3">
                    <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-search fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-file-pdf fa-3x"></i></div>

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
export default ReporteClientes;
