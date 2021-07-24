import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Axios from "axios";
import React, { useState, useEffect } from "react";


function Cajas() {

  const [cajas, setCaja] = useState([]);
  var [codigoBusca, setCodigo] = useState("");
  var [nombreBusca, setNombre] = useState("");
      
  useEffect(() => {
    Axios.get("http://localhost:3001/cajas/").then((res) => {
      setCaja(res.data);
    });
  }, []);

  const buscar = () => {
    Axios.post("http://localhost:3001/cajas/buscar",
      {
        codigoBusca: codigoBusca,
        nombreBusca: nombreBusca
      })
      .then((res) => {
        setCaja(res.data);

      });

  };

  const capturaBusca = () => {
    if (codigoBusca !== '') {
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
      
    },
    {
      dataField: "fecha",
      text: "Fecha de Registro",
      editable: false,
    },
    {
      dataField: "descripcion",
      text: "Descripción",
      editable: false,
    },
    {
      dataField: "entradaDinero",
      text: "Entrada de Dinero",
      editable: false,
    },
    {
      dataField: "aperturaCaja",
      text: "Apertura de Caja",
      editable: false,
    },
    
    {
      dataField: "cierreCaja",
      text: "Cierre de caja",
      editable: false,
    },
    {
      dataField: "restaurante",
      text: "Restaurante",
      editable: false,
    }
  ];

  return (
    <div className="container">
       <div class="row" style={{ height: "800px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Cajas</h3>
          <i className="fas fa-cash-register fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 h-25"  style={{ backgroundColor: "#C42709" }}>
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
                      <label className="col-sm-4 col-form-label">
                        Código del Registro
                      </label>
                      <div className="col ">
                        <input type="text" className="form-control col-sm-8"
                          value={codigoBusca}
                          onChange={(event) => {
                            setCodigo(event.target.value);
                          }} />
                      </div>
                    </div>
                  </div>
                <div className="col"></div>

                </div>
              </div>
              <div class="form-group row mt-2  text-center table-scroll" >
                <div className="py-5 px-4 ">
                  <BootstrapTable
                    keyField="id"
                    data={cajas}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cajas;
