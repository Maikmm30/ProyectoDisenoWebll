import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Roles() {

  const [roles, setRol] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [rolNuevo, setNuevoRol] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/roles/").then((res) => {
      setRol(res.data);
    });
  }, []);


  const actualiza = () => {
    Axios.put("http://localhost:3001/roles/update", {
      codigoActualiza: codigoActualiza,
      rolNuevo: rolNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };


  const buscar = () => {
    Axios.post("http://localhost:3001/roles/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setRol(res.data);

      });

  };


  const capturaInput = (event) => {
    if (!event.target.value == "") {
      setNuevoRol(event.target.value);
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
      text: "Nombre del rol",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    }
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
    Axios.put("http://localhost:3001/roles/eliminar",
      {
        codigoBusca: codigoBusca
      })
      .then(() => {

        window.location.reload()
      });
  };

  return (
    <div className="container">
      <div class="row" style={{ height: "800px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Roles</h3>
          <i className="fas fa-address-card fa-10x  text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-4 m-4">

                <div className="col">
                  <button className=" p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button>
                </div>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBusca}></button>
                </div>
                <div className="col">
                  <button className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></button>
                </div>
                <div className="col">
                  <button className=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={recarga}></button>
                </div>
              </div>
            </div>
            <div class="col-12  h-80">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label for="staticEmail" className="col-sm-3 col-form-label">
                        Código del Rol
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={codigoBusca}
                          onChange={(event) => {
                            setCodigo(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label for="staticEmail" className="col-sm-4 col-form-label">
                        Nombre del Rol
                      </label>
                      <div className="col-sm-8">
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
                </div>
              </div>
              <div class="form-group row mt-2  text-center" class="table-scroll">
                <div className="py-5 px-5"
                  onKeyUp={capturaInput}
                  onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={roles}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div className="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-2 m-4  ">
                <Link to="/agregarRoles">
                  <div className="col">
                    <button className=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button>
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
export default Roles;
