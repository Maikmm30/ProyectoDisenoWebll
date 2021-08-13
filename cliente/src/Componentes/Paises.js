import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function Paises() {
  const [paises, setPais] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [paisNuevo, setNuevoPais] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/paises/").then((res) => {
      setPais(res.data);
    });
  }, []);

  const actualizaPais = () => {
    Axios.put("http://localhost:3001/paises/update",
      {
        codigoActualiza: codigoActualiza,
        paisNuevo: paisNuevo,
        columnaSeleccionada: columnaSeleccionada,
        bitacoraUsuario: getCookie("usuario"),
        bitacoraRol: getCookie("rol"),
      });
    window.location.reload()

  }

  const buscarPais = () => {
    Axios.post("http://localhost:3001/paises/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setPais(res.data);

      });

  };
  const eliminaPais = () => {
    Axios.put("http://localhost:3001/paises/eliminar",
      {
        codigoBusca: codigoBusca,
        bitacoraUsuario: getCookie("usuario"),
        bitacoraRol: getCookie("rol"),
      })
      .then(() => {
        window.location.reload()
      });

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
          console.log(columnaSeleccionada)
        }
      }
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(row.codigo)
    }
  };
  const capturaInput = (event) => {
    if (!event.target.value == '') {
      setNuevoPais(event.target.value)
      console.log(event.target)
    }
  };


  const capturaBuscaPais = () => {
    if (codigoBusca && nombreBusca !== '') {
      buscarPais()
    }
    else {
      alert('Por favor ingrese los datos')
    }
  }
  const capturaEliminaPais = () => {
    if (codigoBusca && nombreBusca !== '') {
      eliminaPais()
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

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <div className="container">
      <div class="row" style={{ height: "800px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5 ">
          <h3>Lista de Países </h3>
          <i className="fas fa-globe-americas fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <button className="p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button>
                </div>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBuscaPais}></button>
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
              Solo búsqueda
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label className="col-sm-3 col-form-label">
                        Código del País
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
                      <label className="col-sm-4 col-form-label">
                        Nombre del País
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
                  onBlur={actualizaPais}>
                  <BootstrapTable
                    keyField="id"
                    data={paises}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>

            <div className="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-2 m-4  ">

                <div className="col">
                  <Link to="/agregarPaises">
                    <button className=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button>
                  </Link>
                </div>

                <div className="col">
                  <button className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x" onClick={capturaEliminaPais}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Paises;
