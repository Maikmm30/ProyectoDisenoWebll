import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const columns = [
  {
    dataField: "codigo",
    text: "Código",
  },
  {
    dataField: "nombreCompleto",
    text: "Nombre",
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
    dataField: "tipoCliente",
    text: "Tipo Cliente",
  }

];


function ClientesBarra() {

  const [clientesBarra, setClientesBarra] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [clienteBarraNuevo, setClienteBarraNuevo] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/clientes-barra/").then((res) => {
      setClientesBarra(res.data);
    });
  }, []);

  const actualizaClienteBarra = () => {
    Axios.put("http://localhost:3001/clientes-barra/update",
      {
        codigoActualiza: codigoActualiza,
        clienteBarraNuevo: clienteBarraNuevo,
        columnaSeleccionada: columnaSeleccionada
      });
    window.location.reload()
  }

  const buscarClienteBarra = () => {
    Axios.post("http://localhost:3001/clientes-barra/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        clientesBarra(res.data);
      });
  };

  const eliminaClienteBarra = () => {
    Axios.put("http://localhost:3001/clientes-barra/eliminar",
      {
        codigoBusca: codigoBusca
      })
      .then(() => {
        window.location.reload()
      });
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(row.codigo)
    }
  };
  const capturaInput = (event) => {
    if (!event.target.value == '') {
      clienteBarraNuevo(event.target.value)
      console.log(event.target)
    }
  };

  const capturaBuscaClienteBarra = () => {
    if (codigoBusca && nombreBusca !== '') {
      buscarClienteBarra()
    }
    else {
      alert('Por favor ingrese los datos')
    }
  }

  const capturaEliminaClientesBarra = () => {
    if (codigoBusca && nombreBusca !== '') {
      eliminaClienteBarra()
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
      <div class="row" style={{ height: "874px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5 ">
          <h3>Lista de Clientes Barra</h3>
          <i className="fas fa-glass-martini-alt fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <button className="p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button>
                </div>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBuscaClienteBarra}></button>
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
                  <div className="col me-4">
                    <div className="form-group row mt-2">
                      <label className="col-sm-3 col-form-label">
                        Código del Cliente
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
                    <div className="row">
                      <div className="form-group row ">
                        <label className="col-sm-4 col-form-label">
                          Fecha de Reservación
                        </label>
                        <div className="col-sm-8">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group  mt-2">
                    <div className="row">
                      <div className="col ">
                        <div className="form-group row ">
                          <label className="col-sm-4 col-form-label">
                            Nombre del Cliente:
                          </label>
                          <div className="col-sm-8 ms-2">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row mt-2  text-center" class="table-scroll">
                <div className="py-5 px-5"
                  onKeyUp={capturaInput}
                  onBlur={actualizaClienteBarra}>
                  <BootstrapTable
                    keyField="id"
                    data={clientesBarra}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div className="text-center col-12 h-20" style={{height: "850", backgroundColor: "#C42709" }}>
              <div className="row row-cols-2 m-4  ">

                <div className="col">
                  <Link to="/agregarClientesBarra">
                    <button className=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button>
                  </Link>
                </div>

                <div className="col">
                  <button className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x" onClick={capturaEliminaClientesBarra}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientesBarra;
