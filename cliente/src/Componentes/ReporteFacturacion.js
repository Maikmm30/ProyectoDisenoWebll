
import BootstrapTable from 'react-bootstrap-table-next';

  import Axios from "axios";
  import React, { useState, useEffect } from "react";
  import jsPDF from 'jspdf'
import 'jspdf-autotable'
  

  
function ReporteFacturacion() {

  var d = new Date();
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  var minutostring = d.getMinutes()< 10 ? '0':'' + d.getMinutes()
  var horastring = d.getHours() + ":" + minutostring;

  const [reporte, setReporte] = useState([]);
  var fechaActual = datestring

  const generarPdf =() =>{
    const doc = new jsPDF();
   
  let  head = ['Codigo', 'Fecha de registro', 'Descripcion', 'Entrada de Dinero', 'Apertura de Caja', 'Cierre de caja', 'Restaurante' ]
  let row= []
 
  reporte.forEach(element => {      
   var fila = [element.codigo, element.fecha, element.descripcion, element.entradaDinero, element.aperturaCaja, element.cierreCaja, element.restaurante];
   row.push(fila);
  })
 
  doc.autoTable(head, row, { startY: 10 });
  
  window.open(URL.createObjectURL(doc.output("blob")))
  doc.save('ReporteFacturacion.pdf');
 
 }


useEffect(() => {
  Axios.get("http://localhost:3001/cajas/").then((res) => {
    setReporte(res.data);
  });

  console.log(reporte)
 
  
}, []);

  const columns = [{
    
      dataField: "codigo",
      text: "Código",
      
    },
    {
      dataField: "fecha",
      text: "Fecha de Registro",
    },
    {
      dataField: "descripcion",
      text: "Descripción",
    },
    {
      dataField: "entradaDinero",
      text: "Entrada de Dinero",
    },
    {
      dataField: "aperturaCaja",
      text: "Apertura de Caja",
    },
    
    {
      dataField: "cierreCaja",
      text: "Cierre de caja",
    },
    {
      dataField: "restaurante",
      text: "Restaurante",
    }
];

  return (
    <div class="container">
      <div class="row " style={{ height: "610px" , backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Reporte de Facturacion</h3>
          <i class="far fa-file fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12" style={{ backgroundColor: "#C42709" }}>
                <div class="row row-cols-4 m-3">
                
              </div>
              <div class="form-group row mb-4">
                  <label for="staticEmail" class="col col-form-label">
                    Fecha:
                  </label>
                <div class="col-sm">
                  <label for="staticEmail" class=" col-form-label">
                  {fechaActual}
                  </label>
              </div>
                  <label for="staticEmail" class="col-sm col-form-label">
                    Hora:
                  </label>
                <div class="col">
                  <label for="staticEmail" class="col-sm col-form-label">
                    {horastring}
                  </label>
                </div>
            </div>
            </div>
            <div class="col-12  h-80">
             
              <div class="form-group row mt-2 table-scroll">
                
                <div class="col-sm-12">
                <BootstrapTable
                    keyField="id"
                    data={ reporte }
                    columns={ columns }
                />
                </div>
            </div>
            <div class="text-center col-12 h-15" style={{ backgroundColor: "#C42709" }}>
                <div class="row row-cols-1 m-3">
                  <div class="col"><button class=" py-3 px-4 bg-light rounded-circle fas fa-file-pdf fa-3x"  onClick={generarPdf}></button></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReporteFacturacion;
