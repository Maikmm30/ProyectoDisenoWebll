import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";


function Proveedores() {

  const [DatosProveedores, setDatosProveedores] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [proveedorNuevo, setNuevoProveedor] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/proveedores/").then((res) => {
      setDatosProveedores(res.data);
    });
  }, []);

  const actualiza = () => {
    Axios.put("http://localhost:3001/proveedores/update",
      {
        codigoActualiza: codigoActualiza,
        proveedorNuevo: proveedorNuevo,
        columnaSeleccionada: columnaSeleccionada
      });
    window.location.reload()
  }

  const buscar = () => {
    Axios.post("http://localhost:3001/proveedores/buscar", 
    {
      codigoBusca : codigoBusca,
      nombreBusca : nombreBusca
    })
    .then((res) => {
      setDatosProveedores(res.data);
    });
  };

  const capturaInput = (event) => {
    if (!event.target.value == '') {
      setNuevoProveedor(event.target.value)
    }
  };

  
  const capturaBusca = ()=>{
    if(codigoBusca && nombreBusca!== ''){
      buscar()
    }
    else{
     alert('Por favor ingrese los datos')
    }
  }

  const recarga = () => {
    window.location.reload();
  };
  
  const limpiaCajas = () => {
    setCodigo("");
    setNombre("");
  };

  const columns = [
    {
      dataField: "codigo",
      text: "Código",
      editable: false,
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "nombre",
      text: "Nombre",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "primerApellido",
      text: "Primer Apellido",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "segundoApellido",
      text: "Segundo Apellido",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "telefonoOficina",
      text: "Teléfono Oficina",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "fax",
      text: "Fax",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    },
    {
      dataField: "celular",
      text: "Celular",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
        },
      }
    }
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
          <h3>Lista de Proveedores</h3>
          <i class="fas fa-people-carry fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
              
                  <div class="col"><button class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "onClick={limpiaCajas}></button></div>
              
                <div class="col "><button class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBusca}></button></div>
                <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></button></div>
                <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"  onClick={recarga}></button></div>

              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Búsqueda de Proveedores
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código del Proveedor
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                    value={codigoBusca}
                    onChange={(event) => {
                      setCodigo(event.target.value);
                    }}
                  />
                </div>
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre del Proveedor
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    value={nombreBusca}
                    onChange={(event) => {
                      setNombre(event.target.value);
                    }}
                  />
                </div>
              </div>
          
              <div class="form-group row mt-2">

                <div class="col-sm-12"
                   onKeyUp={capturaInput} onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={DatosProveedores}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>

                <div class="text-center col-12 bg-success h-25">
                  <div class="row row-cols-2 m-4">
                  <Link to='/agregarProveedores'>
                    <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button></div>
                   </Link>
                    <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></button></div>

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
export default Proveedores;
