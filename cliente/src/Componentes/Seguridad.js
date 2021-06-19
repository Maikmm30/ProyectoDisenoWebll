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
                
                <div class="form-check col-12">
                <Link to='/usuarios'> 
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Usuarios
                            </label>
                        </div>
                        
                       
                <div class="form-check col-12">
                <Link to='/consecutivos'> 
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Consecutivos
                            </label>
                        </div>
                       
                         
                <div class="form-check col-12">
                <Link to='/paises'>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  </Link>
                  <label class="form-check-label" for="flexRadioDefault1">
                                Países
                            </label>
                        </div>
                        
                </div>
              </div>
              <div class="col-sm">
                <div className="form-check">
                
                <div class="form-check col-12">
                <Link to='/cajas'> 
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </Link>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Cajas
                            </label>
                        </div>
                        
                        
                <div class="form-check col-12">
                <Link to='/roles'> 
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                </Link>
                <label class="form-check-label" for="flexRadioDefault1">
                                Roles
                            </label>
                        </div>
                        
                         
                <div class="form-check col-12">
                <Link to='/unidadMedida'>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  </Link>
                   <label class="form-check-label" for="flexRadioDefault1">
                                Unidades de Medida
                            </label>
                        </div>
                        
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
