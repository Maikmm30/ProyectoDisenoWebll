import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";

function Restaurantes() {

  var [codigoActualiza, setCodigoActualiza] = useState("")
  var [restauNuevo, setNuevoRestau] = useState("");
  var [columnaSeleccionada, setColumna] = useState("");


  const columns = [
    {
      dataField: "codigo",
      text: "Código",
      editable: false,
      events:{
        onClick:( column, columnIndex)=>{
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
          console.log(columnaSeleccionada)
        }
      }
    },
    {
      dataField: "cantidad",
      text: "Cantidad",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
          console.log(columnaSeleccionada)
        }
      }
    },
    {
      dataField: "restaurante",
      text: "Restaurante",
      events:{
        onClick:( column, columnIndex)=>{
          setColumna(columnIndex.dataField)
          console.log(columnaSeleccionada)
        }
      }
    },
  ];
  
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCodigoActualiza(JSON.parse(row.codigo))
    }
  };
  
const products = [{
  codigo: 1,
  nombre: 'A',
  primerApellido: 'A',
  segundoApellido: '0',
  telefono: '1',
}, {
  codigo: 2,
  nombre: 'B',
  primerApellido: 'B',
  segundoApellido: '0',
  telefono: '1',
},
{
  codigo: 3,
  nombre: 'C',
  primerApellido: 'C',
  segundoApellido: '1',
  telefono: '0',
},
{
  codigo: 4,
  nombre: 'D',
  primerApellido: 'D',
  segundoApellido: '1',
  telefono: '0',
}];

  const actualizaRestaurante = () => {
    Axios.put("http://localhost:3001/paises/update", {
      codigoActualiza: codigoActualiza,
      restauNuevo: restauNuevo,
      columnaSeleccionada: columnaSeleccionada,
    });
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="row" style={{ height: "700px", backgroundColor: "#FF723F"  }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Restaurantes</h3>
          <i className="fas fa-utensils fa-10x  text-light"></i>
        </div> 
        <div className="col-9 ">
          <div className="row h-75">
            <div className="text-center col-12 h-15" style={{  backgroundColor: "#C42709"}}>
              <div className="row row-cols-4 m-4 text-light">
               
                  <div className="col"><i className="  p-3 rounded-circle fas fa-broom fa-3x "></i></div>
            
                <div className="col"><i className=" p-3 rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div className="col"><i className=" py-3 px-4 rounded-circle fas fa-times fa-3x"></i></div>
                <div className="col"><i className=" py-3 px-4 rounded-circle fas fa-sync fa-3x"></i></div>

              </div>
            </div>
            <div className="col-12 h-80">

              <div className="row mt-5 mb-3">

                <label className="col-sm-2">Código del Restaurante</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" placeholder="Codigo" />
                </div>
                <label className="col-sm-2">Nombre del Restaurante</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" placeholder="Nombre" />
                </div>
              </div>

             

              <div className="form-group row mt-2 text-center">
                <div className="py-5 px-5">
                  <BootstrapTable
                    keyField="id"
                    data={products}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>

                <div className="text-center col-12 h-25"  style={{  backgroundColor: "#C42709"}}>
                  <div className="row row-cols-2 m-4 ">
                  <Link to='/restaurantes/agregar-restaurantes'>
                    <div className="col"><i className="text-light py-3 px-4  rounded-circle fas fa-plus-circle fa-3x"></i></div>
                    </Link>
                    <div className="col"><i className="text-light py-3 px-4  rounded-circle fas fa-minus-circle fa-3x"></i></div>

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
export default Restaurantes;
