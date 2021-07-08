import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {
  Link
} from "react-router-dom";

const columns = [{
  dataField: 'codigo',
  text: 'Código'
}, {
  dataField: 'nombre',
  text: 'Nombre'
}, {
  dataField: 'primerApellido',
  text: 'Primer Apellido'
}, {
  dataField: 'segundoApellido',
  text: 'Segundo Apellido'
}, {
  dataField: 'telefono',
  text: 'Telefono Oficina'
}, {
  dataField: 'celular',
  text: 'Celular'
}];

const products = [{
  codigo: 1,
  nombre: 'A',
  cantidad: '1',
  restaurante: 'A'
}, {
  codigo: 2,
  nombre: 'B',
  cantidad: '2',
  restaurante: 'B'
},
{
  codigo: 3,
  nombre: 'C',
  cantidad: '3',
  restaurante: 'C'
},
{
  codigo: 4,
  nombre: 'D',
  cantidad: '4',
  restaurante: 'D'
},
{
  codigo: 5,
  nombre: 'E',
  cantidad: '5',
  restaurante: 'E'
},
{
  codigo: 6,
  nombre: 'F',
  cantidad: '6',
  restaurante: 'F'
}];


function Buffet() {
  return (
    <div className="container">
      <div className="row " style={{ height: "780px" , backgroundColor: "#FF723F"}}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Comida Estilo Buffet</h3>
          <i className="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 h-15" style={{  backgroundColor: "#C42709"}}>
              <div className="row row-cols-4 m-4 text-light">
                  <div className="col"><i className=" p-3  rounded-circle fas fa-broom fa-3x "></i></div>
    
                <div className="col "><i className="p-3  rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div className="col"><i className=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div className="col"><i className=" py-3 px-4  rounded-circle fas fa-sync fa-3x"></i></div>

              </div>
            </div>
            <div className="col-12 h-80">

              <div className="form-group row mt-2 mb-3">

                <label className="col-sm-2 col-form-label">
                  Código de la Comida
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Codigo"
                  />
                </div>

                <label className="col-sm-2 col-form-label">
                  Nombre de la Comida
                </label>

                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Artefacto"
                  />
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

                <div className="text-center col-12 h-25" style={{  backgroundColor: "#C42709"}}>
                  <div className="row row-cols-2 m-4">
                
                    <div className="col">
                    <Link to='/administracion/especiales/buffet/agregar-buffet'>
                      <i className=" py-3 px-4  rounded-circle fas fa-plus-circle fa-3x text-light"></i>
                      </Link>
                      </div>
                
                    <div className="col"><i className=" py-3 px-4  rounded-circle fas fa-minus-circle fa-3x text-light"></i></div>

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
