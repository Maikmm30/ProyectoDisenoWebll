import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


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


function AyudaSistema() {
  return (
    <div className="container text-center">
      <div className="row "  style={{  backgroundColor: "#FF723F"}}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Reporte Ayuda de Sistema</h3>
          <i className="fas fa-question-circle fa-10x text-light" ></i>
        </div>
        <div className="col-9">
          <div className="row h-75">

            <div className="col-12 h-80">
            <h4 className="pt-5" style={{  backgroundColor: "#FF723F"}}>Ayuda para el Módulo de Administración del Sistema</h4>
             <div className="form-group">
                <div className="py-5 px-5">
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

        <div className="text-center col-12 h-25"  style={{  backgroundColor: "#C42709"}}>
          <div className="row row-cols-5 m-4 text-light">

            <div className="col"><i className="fas fa-arrow-circle-left fa-4x "></i></div>
            <div className="col"><i className="fas fa-arrow-circle-right fa-4x"></i></div>
            <div className="col"><i className="fas fa-times-circle fa-4x"></i></div>
            <div className="col"><i className="fas fa-search fa-4x"></i></div>
            <div className="col"><i className="fas fa-print fa-4x"></i></div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default AyudaSistema;
