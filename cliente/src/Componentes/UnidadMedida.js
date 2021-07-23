import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function UnidadMedida() {

  const [unidadMedida, setUnidad] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [detalleBusca, setDetalle] = useState("");
  
  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [unidadNuevo, setNuevoUnidad] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");
  
  useEffect(() => {
    Axios.get("http://localhost:3001/unidadMedida/").then((res) => {
      setUnidad(res.data);
    });
  }, []);

  const actualiza = () => {
    Axios.put("http://localhost:3001/unidadMedida/update", {
      codigoActualiza: codigoActualiza,
      unidadNuevo: unidadNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };

  const buscar = () => {
    Axios.post("http://localhost:3001/unidadMedida/buscar",
      {
        codigoBusca: codigoBusca,
        detalleBusca: detalleBusca
      })
      .then((res) => {
        setUnidad(res.data);

      });

  };

    
  const capturaInput = (event) => {
    if (!event.target.value == "") {
      setNuevoUnidad(event.target.value);
      console.log(event.target);
    }
  };

  const capturaBusca = () => {
    if (codigoBusca && detalleBusca !== '') {
      buscar()
    }
    else {
      alert('Por favor ingrese los datos')
    }
  }

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
      dataField: "unidadMedida",
      text: "Unidad de Medida",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "escala",
      text: "Escala",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "detalle",
      text: "Detalle",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "simbologia",
      text: "Simbología",
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
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista Unidades de Medida</h3>
          <i class="fas fa-balance-scale-right fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <Link to="/agregarUnidadMedida">
                  <div class="col">
                    <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                </Link>
                <div class="col ">
                  <i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBusca}></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i>
                </div>
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Solo búsqueda
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Código Unidad de Medida
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          value={codigoBusca}
                          onChange={(event) => {
                            setCodigo(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Detalle Unidad de Medida
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          value={detalleBusca}
                          onChange={(event) => {
                            setDetalle(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <div class="py-5 px-4" 
                 onKeyUp={capturaInput}
                    onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={unidadMedida}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div class="bg-success text-center">
              <div class="row h-100 ">
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UnidadMedida;
