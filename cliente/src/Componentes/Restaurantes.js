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
  dataField: 'cantidad',
  text: 'Cantidad'
},
{
  dataField: 'restaurante',
  text: 'Restaurante'
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
}];


function Restaurantes() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Restaurantes</h3>
          <i class="fas fa-utensils fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <Link to='/restaurantes/agregar-restaurantes'>
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                </Link>
                <div class="col"><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i></div>

              </div>
            </div>
            <div class="col-12 bg-danger h-80">

              <div class="row mt-2 mb-3">

                <label class="col-sm-2">Código del Restaurante</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" placeholder="Codigo" />
                </div>
              </div>

              <div class="row mt-2 mb-2">

                <label class="col-sm-2">Nombre del Restaurante</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" placeholder="Nombre" />
                </div>

              </div>

              <div class="form-group row mt-2">
                <div class="col-sm-9">
                  <BootstrapTable
                    keyField="id"
                    data={products}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: 'dbclick' })}
                  />
                </div>

                <div class="text-center col-12 bg-success h-25">
                  <div class="row row-cols-2 m-4">

                    <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></i></div>
                    <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></i></div>

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