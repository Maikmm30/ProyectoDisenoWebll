import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { Link } from "react-router-dom";

const columns = [
  {
    dataField: "codigo",
    text: "Código",
  },
  {
    dataField: "rol",
    text: "Nombre del rol",
  }
];

const paises = [
  {
    codigo: 1,
    rol: "A"
  },
  {
    codigo: 2,
    rol: "A"
  }
];

function Roles() {
  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "800px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Lista de Roles</h3>
          <i className="fas fa-address-card fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-80">
            <div className="text-center col-12 bg-success h-25">
              <div className="row row-cols-4 m-4">
                <Link to="/agregarRoles">
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
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label for="staticEmail" className="col-sm-3 col-form-label">
                        Código del Rol
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label for="staticEmail" className="col-sm-4 col-form-label">
                      Nombre del Rol
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <div className="py-5 px-5">
                  <BootstrapTable
                    keyField="id"
                    data={paises}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "dbclick" })}
                  />
                </div>
              </div>
            </div>
            <div className="bg-success text-center">
                  <div className="row h-100 ">
                    <div className="col">
                      <i className=" py-3 px-4 bg-light rounded-circle fas fa-plus-circle fa-3x"></i>
                    </div>
                    <div className="col">
                      <i className=" py-3 px-4 bg-light rounded-circle fas fa-minus-circle fa-3x"></i>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Roles;
