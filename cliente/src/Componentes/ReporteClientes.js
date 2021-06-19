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
    },
    {
    dataField: 'montoPagado',
    text: 'Monto Pagado'
    },
    {
      dataField: 'detalle',
      text: 'Detalle'
    },
    {
        dataField: 'fecha',
        text: 'Fecha'
        }, {
        dataField: 'reservacion',
        text: 'Reservación'
        },
        {
        dataField: 'barra',
        text: 'Barra'
        },
        {
          dataField: 'restaurante',
          text: 'Restaurante'
        }];
    
    const products = [{
        codigo: 1,
        nombre: 'A',
        montoPagado: 1,
        detalle: 'A',
        fecha: '09/05/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'A',
    
      }, {
        codigo: 2,
        nombre: 'B',
        montoPagado: 2,
        detalle: 'B',
        fecha: '09/09/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'A',
      },
      {
        codigo: 3,
        nombre: 'C',
        montoPagado: 1,
        detalle: 'C',
        fecha: '08/05/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'B',
      },
      {
        codigo: 4,
        nombre: 'D',
        montoPagado: 1,
        detalle: 'D',
        fecha: '09/18/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'C',
      }, {
        codigo: 2,
        nombre: 'B',
        montoPagado: 2,
        detalle: 'B',
        fecha: '09/09/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'A',
      },
      {
        codigo: 3,
        nombre: 'C',
        montoPagado: 1,
        detalle: 'C',
        fecha: '08/05/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'B',
      },
      {
        codigo: 4,
        nombre: 'D',
        montoPagado: 1,
        detalle: 'D',
        fecha: '09/18/21',
        reservacion: 'Sí',
        barra: 'No',
        restaurante: 'C',
      }];

  
function ReporteClientes() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "700px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Reporte de Clientes</h3>
          <i class="fas fa-users fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-4 m-4">
                    
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Lista de Clientes
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Fecha
                </label>
                <div class="col-sm-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  16/06/21
                </label>
                    </div>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                  Hora
                </label>
                <div class="col-sm-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  4:53pm
                </label>
                    </div>
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                  Cantidad de Clientes
                </label>
                <div class="col-sm-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  350
                </label>
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
                
              <div class="text-center col-12 bg-success h-15">
                <div class="row row-cols-2 m-3">
                    <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-search fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-file-pdf fa-3x"></i></div>

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
export default ReporteClientes;
