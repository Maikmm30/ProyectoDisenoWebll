
function AgregarEspecialidad() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "600px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Especialidad</h3>
          <i class="fas fa-table fa-10x"></i>
        </div>
        <div class="col-9" style={{ backgroundColor: "#dc3545" }}>
          <div class="row">
            <div class="text-center mb-3 col-12 bg-success h-35">
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div class="col"><i class="py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h4>Información de la Especialidad</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" />
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre del Platillo</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row mt-2">
                  <label class="col-sm-3">Ingredientes</label>
                  <div class="col-sm-8" >
                    <textarea class="form-control" rows="4" />
                  </div>
                </div>

              </div>
              <div class="col">

                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Precio</label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" />
                  </div>
                </div>

                <div class="row mt-3 ">
                  <label class="col-sm-3">Detalle</label>
                  <div class="col-sm-8" >
                    <textarea class="form-control" rows="4"/>
                  </div>
                </div>

                <label class="form-label" for="customFile">Seleccione una imagen</label>
                <input type="file" class="form-control" id="customFile" />

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarEspecialidad;
