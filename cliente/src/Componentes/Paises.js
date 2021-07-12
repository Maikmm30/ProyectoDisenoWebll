import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function Paises() {
  const [paises, setPais] = useState([]);
  const [codigoPais, setCodigoPais] = useState("");
  const [nombrePais, setNombrePais] = useState("");


  
  var [paisActualiza, setActualizaPais] = useState("");
  var [paisNuevo, setNuevoPais] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/paises/").then((res) => {
      setPais(res.data);
    });
  }, []);

  /*const buscarPais = () => {
  Axios.get('http://localhost:3001/paises/buscar',{
    //codigoPais:codigoPais,
    nombrePais:nombrePais
  })
  .then((res) => {
    setPais(res.data)
  })
};*/

const actualizaPais = () => {

  Axios.put("http://localhost:3001/paises/update",
  {
    paisActualiza: paisActualiza,
    paisNuevo : paisNuevo,
    columnaSeleccionada : columnaSeleccionada 
  }
  );
  window.location.reload()
  
}

  const columns = [
    {
      dataField: "codigo",
      text: "Código",
      events:{
        onClick:( column, columnIndex, )=>{
          setColumna(columnIndex.dataField)
        }
      }
    },
    {
      dataField: "nombre",
      text: "Nombre",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
        }
      }
    },
  ];
  const capturaInput = (event) => { 
   if (!event.target.value == '') {
    setNuevoPais(event.target.value)
    console.log(columnaSeleccionada)
   }
  };

  const capturaValorAntiguo = (event)=>{
    if (event.target.tagName === "TD") {
      setActualizaPais(event.target.textContent)
    }
    

  }
  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "800px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Países </h3>
          <i className="fas fa-globe-americas fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 bg-success h-30">
              <div className="row row-cols-4 m-4">
                <Link to="/agregarPaises">
                  <div className="col">
                    <i className="p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                </Link>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></button>
                </div>
                <div className="col">
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <button className="py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={actualizaPais}></button>
                </div>
              </div>
            </div>
            <div className="col-12 bg-danger h-80">
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
                          onChange={(event) => {
                            setCodigoPais(event.target.value);
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
                          onChange={(event) => {
                            setNombrePais(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <div className="py-5 px-5" onKeyUp ={capturaInput} onBlur={actualizaPais} onDoubleClick={capturaValorAntiguo}>
                  <BootstrapTable
                    keyField="id"
                    data={paises}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>

            <div className="bg-success text-center">
              <div className="row">
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
export default Paises;
