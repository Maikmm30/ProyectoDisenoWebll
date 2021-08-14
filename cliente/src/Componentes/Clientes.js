
import BootstrapTable from 'react-bootstrap-table-next';

import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";



function Clientes() {
  
  const [clientes, setClientes] = useState([]);
  var [restauranteBusca, setRestaurante] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/clienteReporte").then((res) => {
      setClientes(res.data);
    });

    console.log(clientes)
  
    
  }, []);
  const buscarCliente= () => {
    Axios.post("http://localhost:3001/clienteReporte/buscar",
      {
        restauranteBusca: restauranteBusca
      })
      .then((res) => {
        setClientes(res.data);
      });
  };
  const capturaBuscaCliente= () => {
    if (restauranteBusca !== '') {
      buscarCliente()
    }
    else {
      alert('Por favor ingrese el dato a buscar')
    }
  }

  const recarga = () => {
    window.location.reload();
  }
  const limpiaCajas = () => {
    setRestaurante("")
  }
  const columns = [
    {
      dataField: "codigo",
      text: "Código",
    },
    {
      dataField: "nombreCompleto",
      text: "Nombre Completo",
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
      dataField: "reservacion",
      text: "Reservación",
    },
    {
      dataField: "barra",
      text: "Barra",
    },
    {
      dataField: "restaurante",
      text: "Restaurante",
    },
  ];
  return (
    <div class="container">
      <div class="row" style={{ height: "800px", backgroundColor: "#FF723F"  }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Clientes</h3>
          <i class="fas fa-users fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12"  style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-4 m-4">
               
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "  onClick={limpiaCajas}></i></div>
            
                <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"  onClick={capturaBuscaCliente}></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x" onClick={recarga}></i></div>

              </div>
            </div>
            <div class="col-12 h-100">
            Solo búsqueda
            <div className="container">
              <div className="row">
                <div className="col me-4">
                  <div className="form-group row mt-2">
                    <label className="col-sm-3 col-form-label">
                      Nombre del restaurante
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        value={restauranteBusca}
                        onChange={(event) => {
                          setRestaurante(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                 
                  </div>
                </div>

              </div>
            </div>
         
              <div class="form-group row mt-5 table-scroll">

                <div class="col-sm-12">
                  <BootstrapTable
                    keyField="id"
                    data={clientes}
                    columns={columns}
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
export default Clientes;
