import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getCookie from './utils/Cookies';

function ListaMarcas() {


  const [marcas, setMarca] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [marcaNuevo, setNuevoMarca] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/marcas/").then((res) => {
      setMarca(res.data);
    });
  }, []);

  const actualizaPais = () => {
    Axios.put("http://localhost:3001/marcas/update",
      {
        codigoActualiza: codigoActualiza,
        marcaNuevo: marcaNuevo,
        columnaSeleccionada: columnaSeleccionada
      });

    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoActualiza + ': ' + getCookie('usuario') + ' actualizo una marca',

    });

    window.location.reload()
  }

  const buscar = () => {
    Axios.post("http://localhost:3001/marcas/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setMarca(res.data);
      });
  };

  const capturaInput = (event) => {
    if (!event.target.value == '') {
      setNuevoMarca(event.target.value)
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
          console.log(columnaSeleccionada);
        },
      }
    },
    {
      dataField: "descripcion",
      text: "Descripcion",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
          console.log(columnaSeleccionada);
        },
      }
    },
    {
      dataField: "nacionalidad",
      text: "Nacionalidad",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
          console.log(columnaSeleccionada);
        },
      }
    },
    {
      dataField: "empresa",
      text: "Empresa",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
          console.log(columnaSeleccionada);
        },
      }
    },
    {
      dataField: "telefono",
      text: "Teléfono",
      events: {
        onClick: (column, columnIndex) => {
          setColumna(columnIndex.dataField);
          console.log(columnaSeleccionada);
        },
      }
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(row.codigo)
    }
  };


  const recarga = () => {
    window.location.reload();
  };

  const limpiaCajas = () => {
    setCodigo("");
    setNombre("");
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
    Axios.put("http://localhost:3001/marcas/eliminar",
      {
        codigoBusca: codigoBusca
      })
      .then(() => {

        window.location.reload()
      });

    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoBusca + ': ' + getCookie('usuario') + ' elimino una marca',

    });

  };


  return (
    <div class="container">
      <div class="row " style={{ height: "750px", backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Marcas</h3>
          <i class="fas fa-copyright fa-10x text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-4 m-4">

                <div class="col"><button class=" p-3 bg-light rounded-circle fas fa-broom fa-3x " onClick={limpiaCajas}></button></div>

                <div class="col "><button class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={capturaBusca}></button></div>
                <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></button></div>
                <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={recarga}></button></div>

              </div>
            </div>
            <div class="col-12 h-80">
              Búsqueda de Marcas
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código de la Marca
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    value={codigoBusca}
                    onChange={(event) => {
                      setCodigo(event.target.value);
                    }}
                  />
                </div>
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre de la Marca
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

              <div class="form-group  ">

                <div class="col-sm-12 table-scroll"
                  onKeyUp={capturaInput} onBlur={actualizaPais}>
                  <BootstrapTable
                    keyField="id"
                    data={marcas}
                    columns={columns}
                    rowEvents={rowEvents}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>

                <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
                  <div class="row row-cols-2 m-4">
                    <Link to='/marcas'>
                      <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></button></div>
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
      </div>
    </div>
  );
}
export default ListaMarcas;
