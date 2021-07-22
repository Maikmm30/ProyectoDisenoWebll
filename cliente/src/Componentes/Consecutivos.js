import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Consecutivos() {

  
  const [consecutivos, setConsecutivo] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");
  
  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [consecutivoNuevo, setNuevoConsecutivo] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

    
  useEffect(() => {
    Axios.get("http://localhost:3001/consecutivos/").then((res) => {
      setConsecutivo(res.data);
    });
  }, []);

  
  const actualiza = () => {
    Axios.put("http://localhost:3001/consecutivos/update", {
      codigoActualiza: codigoActualiza,
      consecutivoNuevo: consecutivoNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };

  const capturaInput = (event) => {
    if (!event.target.value == "") {
      setNuevoConsecutivo(event.target.value);
      console.log(event.target);
    }
  };
  

const columns = [
  {
    dataField: "codigo",
    text: "Código",
    editable: false,
    events:{
      onClick:( column, columnIndex)=>{
        setColumna(columnIndex.dataField)
      }
    }
  },
  {
    dataField: "tipo",
    text: "Tipo",
    events:{
      onClick:( column, columnIndex)=>{
        setColumna(columnIndex.dataField)
      }
    }
  },
  {
    dataField: "descripcion",
    text: "Descripción",
    events:{
      onClick:( column, columnIndex)=>{
        setColumna(columnIndex.dataField)
      }
    }
  },
  {
    dataField: "valorConsecutivo",
    text: "Valor del consecutivo",
    events:{
      onClick:( column, columnIndex)=>{
        setColumna(columnIndex.dataField)
      }
    }
  },
  {
    dataField: "contienePrefijo",
    text: "Contiene Prefijo",
    events:{
      onClick:( column, columnIndex)=>{
        setColumna(columnIndex.dataField)
      }
    }
  },
];

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    setCodigoActualiza(JSON.parse(row.codigo))
  }
};

  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "800px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Consecutivos</h3>
          <i className="fas fa-window-restore fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 bg-success h-25">
              <div className="row row-cols-4 m-4">
                <Link to="/agregarConsecutivos">
                  <div className="col">
                    <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                </Link>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 bg-danger h-80">
              Solo búsqueda
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label className="col-sm-4 col-form-label">
                        Código del Consecutivo
                      </label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label className="col-sm-4 col-form-label">
                        Descripción del Consecutivo
                      </label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <div className="py-5 px-4"
                 onKeyUp={capturaInput}
                 onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={consecutivos}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div className="bg-success text-center">
              <div className="row h-100 ">
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Consecutivos;
