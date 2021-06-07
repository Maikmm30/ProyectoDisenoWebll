function AgregarUsuarios() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "650px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3 class="mb-4 text-center">Usuarios</h3> 
          <i class="fas fa-user-plus fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="text-center mb-3 col-12 bg-success h-35">
              <div class="row row-cols-4 m-4">
                <div class="col">
                  <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div class="col ">
                  <i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-key fa-3x"></i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h4>  Datos personales del usuario</h4>
                <div class=" row mt-4 mb-3">
                  <label class="col-sm-3 ">Código</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class=" row mt-2 mb-2">
                  <label for="staticEmail" class="col-sm-3">
                    Primer Apellido
                  </label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-2 mb-2">
                  <label for="staticEmail" class="col-sm-3">
                    Teléfono N°1
                  </label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-1 mb-3">
                  <label for="staticEmail" class="col-sm-3">
                    Teléfono N°2
                  </label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col">
                <h4> Datos tecnicos de usuarios	</h4>
                <div class=" row mt-4 mb-2">
                  <label class="col-sm-3">Login</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-3 mb-2">
                  <label class="col-sm-3 ">Contraseña</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-3 ">
                  <label class="col-sm-3">Confirmar contraseña</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col pt-4 mt-5">
                    <input type="checkbox" class="form-check-input me-2" />
                    <label class="col-sm-6">Cambio de contraseña</label>
                </div>
              </div>
              <h4 class='mt-3'>Privilegios</h4>
              <div class="row mt-2">
              
                <div class="col">
                    <input type="checkbox" class="form-check-input me-2" />
                    <label class="col-sm-10">Administrador del Sistema</label>
                </div>
                <div class="col mt-2">
                <input type="checkbox" class="form-check-input me-2" />
                    <label class="col-sm-10">Administrador del Restaurante</label>
                </div>
                <div class="w-10"></div>
                <div class="col">
                <input type="checkbox" class="form-check-input me-2" />
                    <label class="col-sm-10">Administrador de Seguridad</label>
                </div>
                <div class="col mt-1">
                <input type="checkbox" class="form-check-input me-2" />
                    <label class="col-sm-10">Administrador de Cuentas</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarUsuarios;
