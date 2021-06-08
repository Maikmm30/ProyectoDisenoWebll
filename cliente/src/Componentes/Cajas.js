import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

const columns = [
  {
    dataField: "codigo",
    text: "Código",
    
  },
  {
    dataField: "fechaRegistro",
    text: "Fecha de Registro",
  },
  {
    dataField: "descripcion",
    text: "Descripción",
  },
  {
    dataField: "entradaDinero",
    text: "Entrada de Dinero",
  },
  {
    dataField: "aperturaCaja",
    text: "Apertura de Caja",
  },
  ,
  {
    dataField: "cierreCaja",
    text: "Cierre de caja",
  },
  {
    dataField: "restaurante",
    text: "Restaurante",
  }
];

const consecutivos = [
  {
    codigo: 1,
    fechaRegistro: "A",
    descripcion: "1",
    entradaDinero: "A",
    aperturaCaja: "1",
    cierreCaja: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    fechaRegistro: "A",
    descripcion: "1",
    entradaDinero: "A",
    aperturaCaja: "1",
    cierreCaja: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    fechaRegistro: "A",
    descripcion: "1",
    entradaDinero: "A",
    aperturaCaja: "1",
    cierreCaja: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    fechaRegistro: "A",
    descripcion: "1",
    entradaDinero: "A",
    aperturaCaja: "1",
    cierreCaja: "A",
    restaurante: "A",
  },
];

function Cajas() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Lista de Cajas</h3>
          <i class="fas fa-cash-register fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <div class="col">
                  <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
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
                  <div class="col me-4">
                    <div class="form-group row mt-2">
                      <label for="staticEmail" class="col-sm-4 col-form-label">
                        Código del Registro
                      </label>
                      <div class="col-sm-8 ">
                        <input
                          type="number"
                          class="form-control"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="row">
                    <div class="form-group row mt-2 ">
                            <div class="col-sm-1">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="" />
                            </div>
                            <label
                              for="staticEmail"
                              class="col-sm-5  col-form-label">
                              Apertura de cajas
                            </label>
                          </div>
                    </div>
                  </div>

                  <div class="form-group  mt-2">
                    <div class="row ">
                      <div class="col me-4">
                        <div class="form-group row ">
                          <label
                            for="staticEmail"
                            class="col-sm-4  col-form-label"
                          >
                            Nombre del Restaurante
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
                        <div className="row">
                          <div class="form-group row">
                            <div class="col-sm-1">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                              />
                            </div>
                            <label
                              for="staticEmail"
                              class="col-sm-5  col-form-label ">
                                Cierre de cajas
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mt-2">
                    <label for="staticEmail" class="col-sm-2 col-form-label">
                      Fecha del registro
                    </label>
                    <div class="col-sm-4">
                    <input type="date" name="" id="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <div class="py-5 px-4 ">
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
export default Cajas;
