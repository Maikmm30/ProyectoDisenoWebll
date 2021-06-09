function AgregarUnidadMedida() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "650px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3 class="mb-4 text-center">Unidades de Medida</h3>
          <i class="fas fa-balance-scale-right fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="text-center mb-3 col-12 bg-success h-35">
              <div class="row row-cols-3 m-4">
                <div class="col">
                  <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div class="col ">
                  <i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>
            <h4>Información de Unidades de Medida</h4>
            <div class=" row mt-4">
              <div class="col">
                <div className="row">
                  <label class="col-sm-3">Código</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row ">
                
                </div>
              </div>
            </div>
            <div class=" row mt-4">
              <div class="col">
                <div className="row">
                  <label class="col-sm-3">Unidad</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row ">
                
                </div>
              </div>
            </div>
            <div class=" row mt-4 ">
              <div class="col">
                <div className="row">
                  <label class="col-sm-3">Escala</label>
                  <div class="col-sm-8">
                  <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Yotta</option>
                        <option>Zetta</option>
                        <option>Exa</option>
                        <option>Peta</option>
                        <option>Tera</option>
                        <option>Giga</option>
                        <option>Mega</option>
                        <option>Kilo</option>
                        <option>Hecto</option>
                        <option>Deca</option>
                        <option>Deci</option>
                        <option>Centi</option>
                        <option>Mili</option>
                        <option>Micro</option>
                        <option>Nano</option>
                        <option>Pico</option>
                        <option>Femto</option>
                        <option>Atto</option>
                        <option>Zepto</option>
                        <option>Yocto</option>
                      </select> 
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row ">
                <label class="col-sm-3">Símbolo</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class=" row mt-4 ">
              <div class="col">
                <div className="row">
                  <label class="col-sm-3">Detalle</label>
                  <div class="col-sm-8">
                  <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Unidades de capacidad</option>
                        <option>Unidades de densidad</option>
                        <option>Unidades de energía</option>
                        <option>Unidades de fuerza</option>
                        <option>Unidades de longitud</option>
                        <option>Unidades de masa</option>
                        <option>Unidades de peso específico</option>
                        <option>Unidades de potencia</option>
                        <option>Unidades de superficie</option>
                        <option>Unidades de temperatura</option>
                        <option>Unidades de tiempo</option>
                        <option>Unidades de velocidad</option>
                        <option>Unidades de viscosidad</option>
                        <option>Unidades de volumen</option>
                        <option>Unidades eléctricas</option>
                      </select> 
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row ">
                <label class="col-sm-3">Simbología</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
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
export default AgregarUnidadMedida;
