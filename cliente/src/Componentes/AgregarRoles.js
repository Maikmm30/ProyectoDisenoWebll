function AgregarRoles() {
    return (
      <div className="container">
        <div className="row bg-warning" style={{ height: "650px" }}>
          <div className="col-3 m-auto text-center pb-5">
            <h3 className="mb-4 text-center">Roles</h3>
            <i className="fas fa-address-card fa-10x"></i>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="text-center mb-3 col-12 bg-success h-35">
                <div className="row row-cols-3 m-4">
                  <div className="col">
                    <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                  <div className="col ">
                    <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                  </div>
                  <div className="col">
                    <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                  </div>
                </div>
              </div>
  
              <h4>Información de los Roles</h4>
              <div className="row mt-2 mb-3">
                <label className="col-sm-3">Código del Rol</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3">
                  Nombre
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3 ">
                  Descripción
                </label>
                <div className="col-sm-4"  >
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
  