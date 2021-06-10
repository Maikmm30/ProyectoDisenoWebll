
function AgregarBuffet() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "600px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Buffet</h3>
          <i class="fas fa-utensils fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div class="col"><i class="py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>

              </div>
            </div>
            <div class="col-12 bg-danger h-80">
              Información de la comida tipo Buffet
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Código
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                    readonly="readonly"
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Precio
                </label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Tipo
                </label>
                <div class="col-sm-3">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option selected="selected">Marina</option>
                    <option>Vegetal</option>
                    <option>Frutas</option>
                    <option>Mediterránea </option>
                  </select>
                </div>

              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Unidad de Medida
                </label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>Unidades de capacidad</option>
                    <option>Unidades de densidad</option>
                    <option>Unidades de energia</option>
                    <option>Unidades de fuerza</option>
                    <option>Unidades de longitud</option>
                    <option>Unidades de masa</option>
                    <option>Unidades de peso específico</option>
                    <option>Unidades de superficie</option>
                    <option>Unidades de temperatura</option>
                    <option>Unidades de tiempo</option>
                    <option>Unidades de velocidad</option>
                    <option>Unidades de viscosidad</option>
                    <option>Unidades de volumen</option>
                    <option>Unidades eléctricas</option>
                    <option>Unidades de potencia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarBuffet;
