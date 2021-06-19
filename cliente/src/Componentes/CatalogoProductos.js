import React from "react";
import {
  Link
} from "react-router-dom";

function CatalogoProductos(){
        return (
            <div class="container">
      <div class="row ">
        <div class="col-sm bg-info text-center">
            <h3>Catálogo de Productos</h3>
            <i class="fab fa-product-hunt fa-10x text-success"></i>
        </div>
        <div class="col-sm bg-warning d-flex align-items-center">
          <div class="container ">
            <div class="row ">
              <div class="col-sm">
                <div className="form-check">
                
                  <label class="form-check-label">Comestibles</label>
                  <Link to='/comestibles'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                  <label class="form-check-label">Desechos y Empaques</label>
                  <Link to='/empaques'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                  <label class="form-check-label">Limpieza e Higiene</label>
                  <Link to='/limpieza'>
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
                <div className="form-check">
              
                    <label class="form-check-label">Tecnología</label>
                    <Link to='/tecnologia'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
                    <label class="form-check-label">Equipos y Utensilios</label>
                    <Link to='/utensilio'>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </Link>
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

export default CatalogoProductos;