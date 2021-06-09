import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { Link } from "react-router-dom";

const columns = [
  {
    dataField: "codigo",
    text: "Código",
  },
  {
    dataField: "unidadMedida",
    text: "Unidad de Medida",
  },
  {
    dataField: "escala",
    text: "Escala",
  },
  {
    dataField: "detalle",
    text: "Detalle",
  },
  {
    dataField: "simbologia",
    text: "Simbología",
  }
];

const consecutivos = [
  {
    codigo: 1,
    unidadMedida: "A",
    escala: "1",
    detalle: "A",
    simbologia: "A"
  },
  {
    codigo: 1,
    unidadMedida: "A",
    escala: "1",
    detalle: "A",
    simbologia: "A"
  },
  {
    codigo: 1,
    unidadMedida: "A",
    escala: "1",
    detalle: "A",
    simbologia: "A"
  },
  {
    codigo: 1,
    unidadMedida: "A",
    escala: "1",
    detalle: "A",
    simbologia: "A"
  },
];

function UnidadMedida() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista Unidades de Medida</h3>
          <i class="fas fa-balance-scale-right fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <Link to="/agregarUnidadMedida">
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
              Solo búsqueda
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Código Unidad de Medida
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
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                      Detalle Unidad de Medida
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
                    data={consecutivos}
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
export default UnidadMedida;
