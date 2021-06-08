function AgregarRoles() {
    return (
      <div class="container">
        <div class="row bg-warning" style={{ height: "650px" }}>
          <div class="col-3 m-auto text-center pb-5">
            <h3 class="mb-4 text-center">Roles</h3>
            <i class="fas fa-address-card fa-10x"></i>
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
  
              <h4>Información de los Roles</h4>
              <div class="row mt-2 mb-3">
                <label class="col-sm-3">Código del Rol</label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class=" row mt-2 mb-3">
                <label for="staticEmail" class="col-sm-3">
                  Nombre
                </label>
                <div class="col-sm-5">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class=" row mt-2 mb-3">
                <label for="staticEmail" class="col-sm-3 ">
                  Descripción
                </label>
                <div class="col-sm-4"  >
                <textarea name="" id="" cols="43" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default AgregarRoles;
  