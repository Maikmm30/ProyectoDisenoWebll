import React from "react";
import {
    Link
  } from "react-router-dom";

function VentanaProveedores(){
        return (
          <div class="container">
            <div class="row ">
              <div class="col-sm bg-info text-center">
                  <h3>Ventana de Proveedores</h3>
                  <i class="fas fa-truck fa-10x text-success"></i>
              </div>
              <div class="col-sm bg-warning d-flex align-items-center">
                <div class="container ">
                  <div class="row ">
                    <div class="col-sm">
                        Opciones
                      <div className="form-check">

                        <label class="form-check-label">Marcas</label>
                        <Link to='/listaMarcas'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                        <label class="form-check-label"></label>
                        <Link to='/listaMarcas'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                        <div class="row"></div>
                        <label class="form-check-label">Productos</label>
                        <Link to='/catalogoProductos'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                        <label class="form-check-label">Proveedores</label>
                        <Link to='/Proveedores'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div class="col-sm">
                      
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

export default VentanaProveedores;

