import React from "react";
import {
    Link
  } from "react-router-dom";

function VentanaReportes(){
        return (
          <div class="container">
            <div class="row ">
              <div class="col-sm bg-info text-center">
                  <h3>Ventana de Reportes</h3>
                  <i class="fas fa-file fa-10x text-success"></i>
              </div>
              <div class="col-sm bg-warning d-flex align-items-center">
                <div class="container ">
                  <div class="row ">
                    <div class="col-sm">
                        Opciones
                        <div class="form-check">
                        <Link to='/bitacora'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Bitácora
                            </label>
                        </div>
                        <div class="form-check">
                        <Link to='/reporteClientes'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Clientes
                            </label>
                        </div>

                        <div class="form-check">
                        <Link to='/reporteFacturacion'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Facturación
                            </label>
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

export default VentanaReportes;

