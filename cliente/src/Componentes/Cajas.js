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
    <div className="container">
      <div className="row bg-warning" style={{ height: "800px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Cajas</h3>
          <i className="fas fa-cash-register fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 bg-success h-25">
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-sync fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 bg-danger h-80">
              Solo búsqueda
              <div className="container">
                <div className="row">
                  <div className="col me-4">
                    <div className="form-group row mt-2">
                      <label className="col-sm-4 col-form-label">
                        Código del Registro
                      </label>
                      <div className="col-sm-8 ">
                        <input
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                    <div className="form-group row mt-2 ">
                            <div className="col-sm-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="" />
                            </div>
                            <label
                              className="col-sm-5  col-form-label">
                              Apertura de cajas
                            </label>
                          </div>
                    </div>
                  </div>

                  <div className="form-group  mt-2">
                    <div className="row ">
                      <div className="col me-4">
                        <div className="form-group row ">
                          <label
                            className="col-sm-4  col-form-label"
                          >
                            Nombre del Restaurante
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="form-group row">
                            <div className="col-sm-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                              />
                            </div>
                            <label
                              className="col-sm-5  col-form-label ">
                                Cierre de cajas
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label for="staticEmail" className="col-sm-2 col-form-label">
                      Fecha del registro
                    </label>
                    <div className="col-sm-4">
                    <input type="date" name="" id="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <div className="py-5 px-4 ">
                  <BootstrapTable
                    keyField="id"
                    data={consecutivos}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
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
