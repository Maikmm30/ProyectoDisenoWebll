import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {
    Link
  } from "react-router-dom";

  import Axios from "axios";
  import React, { useState, useEffect } from "react";
  import jsPDF from 'jspdf'
import 'jspdf-autotable'
  
function ReporteClientes() {
  var d = new Date();
  
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  var minutostring = d.getMinutes()< 10 ? '0':'' + d.getMinutes()
  var horastring = d.getHours() + ":" + minutostring;

  const [reporte, setReporte] = useState([]);
  var [cantidadClientes, setCantidad] = useState("");
  var [fechaActual, setFecha] = useState(datestring);
  var [restauranteBusca, setRestaurante] = useState("");

   
 const generarPdf =() =>{
   const doc = new jsPDF();
  
 let  head = ['Codigo', 'Nombre', 'Monto Pagado', 'Detalle', 'Fecha', 'Reservación', 'Barra', 'Restaurante' ]
 let row= []

 reporte.forEach(element => {      
  var fila = [element.codigo, element.nombreCompleto, element.montoPagado, element.detalle, element.fecha, element.reservacion, element.barra, element.restaurante];
  row.push(fila);
 })

 doc.autoTable(head, row, { startY: 10 });
 
 window.open(URL.createObjectURL(doc.output("blob")))
 doc.save('ReporteClientes.pdf');

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

  useEffect(() => {
    Axios.get("http://localhost:3001/clienteReporte/").then((res) => {
      setReporte(res.data);
    });

    Axios.get("http://localhost:3001/clienteReporte/cuentaClientes").then((res) => {
      setCantidad(res.data);
    });

    console.log(reporte)
   
    
  }, []);


  const buscarClienteBarra = () => {
    Axios.post("http://localhost:3001/clienteReporte/buscar",
      {
        restauranteBusca: restauranteBusca
      })
      .then((res) => {
        setReporte(res.data);
      });
  };

  const capturaBuscaClienteBarra = () => {
    if (restauranteBusca !== '') {
      buscarClienteBarra()
    }
    else {
      alert('Por favor ingrese los datos')
    }
  }
  return (
    <div class="container">
      <div class="row " style={{ height: "750px", backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Reporte de Clientes</h3>
          <i class="fas fa-users fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-50">
            <div class="text-center col-12 h-25" style={{ backgroundColor: "#C42709" }}>
                <div class="row m-3">
                    
              </div>
              <div class="form-group row mt-2">
              <label for="staticEmail" class="col-sm col-form-label">
                Fecha:
              </label>
              <div class="col-sm-2">
              <label for="staticEmail" class="col-sm col-form-label">
              {fechaActual}
              </label>
                  </div>
                  <label for="staticEmail" class="col-sm col-form-label">
                Hora:
              </label>
              <div class="col-sm">
              <label for="staticEmail" class="col-sm col-form-label">
                {horastring}
              </label>
                  </div>
                  <label for="staticEmail" class="col-sm-4 col-form-label">
                Cantidad de Clientes a la Fecha
              </label>
              <div class="col-sm-2">
              <label for="staticEmail" class="col-sm col-form-label">
               {cantidadClientes}
              </label>
                  </div>
            </div>
            </div>
            <div class="col-12 h-80 mt-4">
          
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
                            
              <div class="form-group row mt-4 table-scroll" >
                
                <div class="col-sm-12">
                <BootstrapTable
                    keyField="id"
                    data={ reporte }
                    columns={ columns }
                />
                </div>
                
             
              </div>
              <div class="text-center col-12 h-15" style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-2 m-3">
                  <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-search fa-3x" onClick={capturaBuscaClienteBarra}></button></div>
                <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-file-pdf fa-3x" onClick={generarPdf}></button></div>

            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReporteClientes;
