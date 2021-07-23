import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Usuarios() {

  const [usuarios, setUsuario] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [usuarioNuevo, setNuevoUsuario] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/usuario/").then((res) => {
      setUsuario(res.data);
    });
  }, []);

  const actualiza = () => {
    Axios.put("http://localhost:3001/usuario/update", {
      codigoActualiza: codigoActualiza,
      usuarioNuevo: usuarioNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };


  const buscar = () => {
    Axios.post("http://localhost:3001/usuario/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setUsuario(res.data);

      });

  };
  const capturaInput = (event) => {
    if (!event.target.value == "") {
      setNuevoUsuario(event.target.value);
      console.log(event.target);
    }
  };


  const capturaBusca = () => {
    if (codigoBusca && nombreBusca !== '') {
      buscar()
    }
    else {
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
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "nombre",
      text: "Nombre",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "primerApellido",
      text: "Primer Apellido",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "segundoApellido",
      text: "Segundo Apellido",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "telefonoFijo",
      text: "Telefóno fijo",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "telefonoCelular",
      text: "Telefóno Celular",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(row.codigo)
    }
  };

  const capturaEliminar = () => {
    if (codigoBusca !== '') {
      eliminarDato()
    }
    else {
      alert('Por favor ingrese el codigo')
    }
  }

  const eliminarDato = () => {
    Axios.put("http://localhost:3001/usuario/eliminar",
      {
        codigoBusca: codigoBusca
      })
      .then(() => {

        window.location.reload()
      });
  };


  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Usuarios</h3>
          <i class="fas fa-user-alt fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">

                <div class="col">
                  <button class=" p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button>
                </div>
                <div class="col ">
                  <button class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBusca}></button>
                </div>
                <div class="col">
                  <button class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></button>
                </div>
                <div class="col">
                  <button class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={recarga}></button>
                </div>
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Información de los artículos
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label class="col-sm-4 col-form-label">
                        Código del Usuario
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
                      <label class="col-sm-3 col-form-label">
                        Nombre del Usuario
                      </label>
                      <div class="col-sm-8">
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
                  </div>

                </div>
              </div>
              <div class="form-group text-center">
                <div class="py-5 px-4"
                  onKeyUp={capturaInput}
                  onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={usuarios}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div class="bg-success text-center ">
              <div class="row row-cols-2 m-4">
                <Link to="/agregarUsuarios">
                  <div class="col">
                    <button class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button>
                  </div>
                </Link>
                <div className="col">
                  <button className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x" onClick={capturaEliminar}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Usuarios;
