function AgregarUsuarios() {
  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "650px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Usuarios</h3> 
          <i className="fas fa-user-plus fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 bg-success h-35">
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-key fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>  Datos personales del usuario</h4>
                <div className=" row mt-4 mb-3">
                  <label className="col-sm-3 ">Código</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  <label className="col-sm-3">Nombre</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className=" row mt-2 mb-2">
                  <label for="staticEmail" className="col-sm-3">
                    Primer Apellido
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <label for="staticEmail" className="col-sm-3">
                    Teléfono N°1
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-1 mb-3">
                  <label for="staticEmail" className="col-sm-3">
                    Teléfono N°2
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <h4> Datos tecnicos de usuarios	</h4>
                <div className=" row mt-4 mb-2">
                  <label className="col-sm-3">Login</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-3 mb-2">
                  <label className="col-sm-3 ">Contraseña</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-3 ">
                  <label className="col-sm-3">Confirmar contraseña</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col pt-4 mt-5">
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="col-sm-6">Cambio de contraseña</label>
                </div>
              </div>
              <h4 className='mt-3'>Privilegios</h4>
              <div className="row mt-2">
              
                <div className="col">
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="col-sm-10">Administrador del Sistema</label>
                </div>
                <div className="col mt-2">
                <input type="checkbox" className="form-check-input me-2" />
                    <label className="col-sm-10">Administrador del Restaurante</label>
                </div>
                <div className="w-10"></div>
                <div className="col">
                <input type="checkbox" className="form-check-input me-2" />
                    <label className="col-sm-10">Administrador de Seguridad</label>
                </div>
                <div className="col mt-1">
                <input type="checkbox" className="form-check-input me-2" />
                    <label className="col-sm-10">Administrador de Cuentas</label>
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
