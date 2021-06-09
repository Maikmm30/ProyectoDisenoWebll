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
    dataField: "montoPagado",
    text: "Monto Pagado",
  },
  {
    dataField: "detalle",
    text: "Detalle",
  },
  {
    dataField: "fecha",
    text: "Fecha",
  },
  ,
  {
    dataField: "reservacion",
    text: "Reservación",
  },
  {
    dataField: "restaurante",
    text: "Restaurante",
  },
];

const consecutivos = [
  {
    codigo: 1,
    nombre: "A",
    montoPagado: "1",
    detalle: "A",
    fecha: "1",
    reservacion: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    nombre: "A",
    montoPagado: "1",
    detalle: "A",
    fecha: "1",
    reservacion: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    nombre: "A",
    montoPagado: "1",
    detalle: "A",
    fecha: "1",
    reservacion: "A",
    restaurante: "A",
  },
  {
    codigo: 1,
    nombre: "A",
    montoPagado: "1",
    detalle: "A",
    fecha: "1",
    reservacion: "A",
    restaurante: "A",
  },
];

function Cajas() {
  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "700px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Clientes</h3>
          <i className="fas fa-utensils fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12 bg-success h-25">
              <div className="row row-cols-4 m-4">
              <Link to="/agregarClientesMesas">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                </Link>
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
                        Código del Cliente
                      </label>
                      <div className="col-sm-8 ">
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="form-group row ">
                        <label className="col-sm-4 col-form-label">
                        Fecha de Reservación
                        </label>
                        <div className="col-sm-8">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group  mt-2">
                    <div className="row ">
                      <div className="col ">
                        <div className="form-group row ">
                          <label className="col-sm-4  col-form-label">
                            Nombre del Cliente
                          </label>
                          <div className="col-sm-8">
                            <input type="text" className="form-control ms-2" />
                          </div>
                        </div>
                      </div>
                      <div className="col ms-5">
                        <div className="row">
                          <div className="form-group row">
                            <div >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                              />
                              <label className="ms-2 ">
                                Reservación
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
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
