import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import React from 'react';

import {
    Link
  } from "react-router-dom";

const columns = [{
dataField: 'codigo',
text: 'Código'
}, {
dataField: 'usuario',
text: 'Usuario'
},
{
dataField: 'fecha',
text: 'Fecha'
},
{
  dataField: 'descripcion',
  text: 'Descripción'
}];

const products = [{
    codigo: 1,
    usuario: 'A',
    fecha: '09/06/21',
    descripcion: 'A',
  }, {
    codigo: 2,
    usuario: 'B',
    fecha: '09/06/21',
    descripcion: 'B',
  },
  {
    codigo: 3,
    usuario: 'C',
    fecha: "09/07/21",
    descripcion: 'C',
  },
  {
    codigo: 4,
    usuario: 'D',
    fecha: "15/07/21",
    descripcion: 'D',
  }];

  
function Bitacora() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Bitacora</h3>
          <i class="fas fa-book fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-4 m-4">
                
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Información de Bitácora
              <div class="form-group row mt-2">
                <div class="form-check form-check-inline col-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">General</label>
                </div>
                <div class="form-check form-check-inline col-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Por Fecha</label>
                </div>
                <div class="form-check form-check-inline col-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Por Usuario</label>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Fecha Inicial
                </label>
                <div class="col-sm-4">
                      <input
                        type="date"
                        class="form-control"
                      />
                    </div>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                  Fecha Final
                </label>
                <div class="col-sm-4">
                      <input
                        type="date"
                        class="form-control"
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                  Usuario
                </label>
                <div class="col-sm-10">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Usuario 1</option>
                        <option>Usuario 2</option>
                        <option>Usuario 3</option>
                      </select>
                </div>

              </div>
              
              
              <div class="form-group row mt-2">
                
                <div class="col-sm-12">
                <BootstrapTable
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
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
export default Bitacora;
