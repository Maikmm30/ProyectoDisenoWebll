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
},
{
dataField: 'segundoApellido',
text: 'Segundo Apellido'
},
{dataField: 'telefono',
text: 'Cedula'
}];

const products = [{
    codigo: 1,
    nombre: 'A',
    primerApellido: 'A',
    segundoApellido: 'A',
    telefono: '1',
  }, {
    codigo: 2,
    nombre: 'B',
    primerApellido: 'B',
    segundoApellido: 'B',
    telefono: '2',
  },
  {
    codigo: 3,
    nombre: 'C',
    primerApellido: 'C',
    segundoApellido: 'C',
    telefono: '3',
  },
  {
    codigo: 4,
    nombre: 'D',
    primerApellido: 'D',
    segundoApellido: 'D',
    telefono: '4',
  }];

  
function Empleados() {
  return (
    <div class="container">
      <div class="row" style={{ height: "700px" , backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Empleados</h3>
          <i class="fas fa-user-friends fa-10x text-light"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  h-25"  style={{  backgroundColor: "#C42709"}}>
                <div class="row row-cols-4 m-4 text-light">
                
                  <div class="col"><i class=" p-3  rounded-circle fas fa-broom fa-3x "></i></div>
               
                  <div class="col "><i class="p-3  rounded-circle  fas fa-check-circle fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4  rounded-circle fas fa-sync fa-3x"></i></div>

              </div>
            </div>
            <div class="col-12 h-80">
              Búsqueda de Empleados
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código del Empleado
                </label>
                <div class="col-sm-4">
                      <input
                        type="number"
                        class="form-control"
                      />
                    </div>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre del Empleado 
                </label>
                <div class="col-sm-4">
                      <input
                        type="number"
                        class="form-control"
                      />
                    </div>
              </div>
              
              
              <div class="form-group row mt-2">
                
                <div class="py-5 px-5">
                <BootstrapTable
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
                />
                </div>
                
              <div class="text-center col-12  h-25" style={{  backgroundColor: "#C42709"}}>
                <div class="row row-cols-2 m-4">
                <Link to='/agregarEmpleados'> 
                  <div class="col"><i class=" py-3 px-4 text-light rounded-circle fas fa-plus-circle fa-3x"></i></div>
                </Link>
                  <div class="col"><i class=" py-3 px-4 text-light rounded-circle fas fa-minus-circle fa-3x"></i></div>

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
export default Empleados;
