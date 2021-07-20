import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const columns = [{
  dataField: 'codigo',
  text: 'Código'
}, {
  dataField: 'cedula',
  text: 'Cedula'
}, {
  dataField: 'fecha',
  text: 'Fecha'
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
  dataField: 'direccion',
  text: 'Direccion'
}, {
  dataField: 'telefonoOficina',
  text: 'Teléfono Oficina'
}, {
  dataField: 'fax',
  text: 'Fax'
}, {
  dataField: 'celular',
  text: 'Celular'
}, {
  dataField: 'estado',
  text: 'Estado'
}];

/*
const products = [{
  codigo: 1,
  nombre: 'A',
  primerApellido: 'A',
  segundoApellido: 'A',
  telefono: '1',
  fax: '1',
  celular: '1'
}, {
  codigo: 2,
  nombre: 'B',
  primerApellido: 'B',
  segundoApellido: 'B',
  telefono: '2',
  fax: '2',
  celular: '2'
},
{
  codigo: 3,
  nombre: 'C',
  primerApellido: 'C',
  segundoApellido: 'C',
  telefono: '3',
  fax: '3',
  celular: '3'
},
{
  codigo: 4,
  nombre: 'D',
  primerApellido: 'D',
  segundoApellido: 'D',
  telefono: '4',
  fax: '4',
  celular: '4'
}];
*/

function Proveedores() {

  const [DatosProveedores, setDatosProveedores] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/proveedores/").then((res) => {
      setDatosProveedores(res.data);
    });
  }, []);

  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Proveedores</h3>
          <i class="fas fa-people-carry fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <Link to='/agregarProveedores'>
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                </Link>
                <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i></div>

              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Búsqueda de Proveedores
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código del Proveedor
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                  />
                </div>
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Dirección
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre del Proveedor
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                  />
                </div>
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Cédula de Identidad
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>


              <div class="form-group row mt-2">

                <div class="col-sm-12">
                  <BootstrapTable
                    keyField="id"
                    data={DatosProveedores}
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
export default Proveedores;
