import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";

function Buffet() {

  const [buffets, setBuffet] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [buffetNuevo, setNuevoBuffet] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/buffet/").then((res) => {
      setBuffet(res.data);
    });
  }, []);

  const actualiza = () => {
    Axios.put("http://localhost:3001/buffet/update", {
      codigoActualiza: codigoActualiza,
      buffetNuevo: buffetNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };

  const buscar = () => {
    Axios.post("http://localhost:3001/buffet/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setBuffet(res.data);

      });

  };

  const capturaInput = (event) => {
    if (!event.target.value == "") {
      setNuevoBuffet(event.target.value);
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
  }

  const limpiaCajas = () => {
    setCodigo("")
    setNombre("")
  }
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
      dataField: "precio",
      text: "Precio",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "tipoComida",
      text: "Tipo de Comida",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "unidadMedida",
      text: "Unidad de Medida",
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
    Axios.put("http://localhost:3001/buffet/eliminar",
      {
        codigoBusca: codigoBusca
      })
      .then(() => {
        window.location.reload()
      });

  };

  return (
    <div className="container">
      <div
        className="row "
        style={{ height: "730px", backgroundColor: "#FF723F" }}
      >
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Comida Estilo Buffet</h3>
          <i className="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div
              className="text-center col-12 h-15"
              style={{ backgroundColor: "#C42709" }}
            >
              <div className="row row-cols-4 m-4 text-light">
                <div className="col">
                  <button className=" p-3  rounded-circle fas fa-broom fa-3x "
                    onClick={limpiaCajas}></button>
                </div>

                <div className="col ">
                  <button className="p-3  rounded-circle  fas fa-check-circle fa-3x"
                    onClick={capturaBusca}></button>
                </div>
                <div className="col">
                  <button className=" py-3 px-4  rounded-circle fas fa-times fa-3x"></button>
                </div>
                <div className="col">
                  <button className=" py-3 px-4  rounded-circle fas fa-sync fa-3x"
                    onClick={recarga}></button>
                </div>
              </div>
            </div>
            <div className="col-12 h-80">
              <div className="form-group row mt-2 mb-3">
                <label className="col-sm-2 col-form-label">
                  Código de buffet
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    value={codigoBusca}
                    onChange={(event) => {
                      setCodigo(event.target.value);
                    }}
                  />
                </div>

                <label className="col-sm-2 col-form-label">
                  Nombre de buffet
                </label>

                <div className="col-sm-4">
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

              <div className="form-group row mt-2 text-center">
                <div className="py-5 px-5 table-scroll"

                  onKeyUp={capturaInput}
                  onBlur={actualiza}>
                  <BootstrapTable
                    keyField="id"
                    data={buffets}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>

                <div
                  className="text-center col-12 "
                  style={{ backgroundColor: "#C42709" }}
                >
                  <div className="row row-cols-2 m-4">
                    <div className="col">
                      <Link to="/administracion/especiales/buffet/agregar-buffet">
                        <button className="py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button>
                      </Link>
                    </div>

                    <div className="col">
                      <button className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x" onClick={capturaEliminar}></button>
                    </div>
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
export default Buffet;
