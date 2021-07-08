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


function AyudaVinos() {
  return (
    <div class="container text-center">
      <div class="row"  style={{  backgroundColor: "#FF723F"}}>
        <div class="col-3 m-auto pb-5">
          <h3>Reporte Ayuda de Vinos.</h3>
          <i class="fas fa-wine-glass-alt fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">

            <div class="col-12 h-80">
            <h4 className="pt-5" style={{  backgroundColor: "#FF723F"}}>Ayuda para los Tipos de Vinos.</h4>
              <div class="form-group row mt-2">
                <div class="py-5 px-5">
                  <BootstrapTable
                    keyField="id"
                    data={products}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="text-center col-12 bg-success h-25" style={{  backgroundColor: "#C42709"}}>
          <div class="row row-cols-5 m-4">

            <div class="col"><i class="fas fa-arrow-circle-left fa-4x"></i></div>
            <div class="col"><i class="fas fa-arrow-circle-right fa-4x"></i></div>
            <div class="col"><i class="fas fa-times-circle fa-4x"></i></div>
            <div class="col"><i class="fas fa-search fa-4x"></i></div>
            <div class="col"><i class="fas fa-print fa-4x"></i></div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default AyudaVinos;
