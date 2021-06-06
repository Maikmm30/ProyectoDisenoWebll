import React from "react";
import {
    Link
  } from "react-router-dom";
export default () => {
  return (
    <div class="container">
      <div class="row ">
        <div class="col-sm bg-info text-center">
            <h3>Seguridad</h3>
            <i class="fas fa-shield-alt fa-10x text-success"></i>
        </div>
        <div class="col-sm bg-warning d-flex align-items-center">
          <div class="container ">
            <div class="row ">
              <div class="col-sm">
                <div className="form-check">
                
                  <label class="form-check-label">Usuarios</label>
                  <Link to='/usuarios'>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  </Link>
                  <label class="form-check-label">Consecutivos</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label">Países</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                </div>
              </div>
              <div class="col-sm">
                <div className="form-check">
              
                <label class="form-check-label">Cajas</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label">Roles o Eventos</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label">Unidades de Medida</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm bg-danger text-center">
          <div class="col-sm bg-success mt-4">
            <div class="col-sm">
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <i class="p-3 text-light rounded-circle  fas fa-check-circle fa-3x"></i>
              </button>
            </div>
          </div>
          <div class="col-sm bg-success">
            <div class="col-sm">
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <i class="p-3 text-light rounded-circle  fas fa-times-circle fa-3x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
