import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { Link } from "react-router-dom";

const columns = [
  {
    dataField: "codigo",
    text: "Código",
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "primerapellido",
    text: "Primer Apellido",
  },
  {
    dataField: "segundoapellido",
    text: "Segundo Apellido",
  },
  {
    dataField: "telefonofijo",
    text: "Telefóno fijo",
  },
  {
    dataField: "telefonocelular",
    text: "Telefóno Celular",
  }
];

const usuarios = [
  {
    codigo: 1,
    nombre: "A",
    primerapellido: "1",
    segundoapellido: "A",
    telefonofijo: "A",
    telefonocelular: "2"
  },
  {
    codigo: 2,
    nombre: "B",
    primerapellido: "2",
    segundoapellido: "B",
    telefonofijo: "B",
    telefonocelular: "2"
  },
  {
    codigo: 3,
    nombre: "C",
    primerapellido: "3",
    segundoapellido: "C",
    telefonofijo: "C",
    telefonocelular: "3"
  },
  {
    codigo: 2,
    nombre: "D",
    primerapellido: "4",
    segundoapellido: "D",
    telefonofijo: "4",
    telefonocelular: "D"
  },
];

function Usuarios() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Usuarios</h3>
          <i class="fas fa-user-alt fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <Link to="/agregarTecnologia">
                  <div class="col">
                    <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                </Link>
                <div class="col ">
                  <i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i>
                </div>
              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Información de los artículos
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Código del Usuario
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="number"
                          class="form-control"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-3 col-form-label">
                      Nickname
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="number"
                          class="form-control"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-100"></div>
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Nombre del Usuario
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="number"
                          class="form-control"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-3 col-form-label">
                        Privilegios
                      </label>
                      <div class="col-sm-8">
                        <input
                          type="number"
                          class="form-control"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <div class="py-5 px-4">
                  <BootstrapTable
                    keyField="id"
                    data={usuarios}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>

                <div class="bg-success">
                  <div class="row h-100 ">
                    <div class="col">
                      <i class=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></i>
                    </div>
                    <div class="col">
                      <i class=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></i>
                    </div>
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
export default Usuarios;
