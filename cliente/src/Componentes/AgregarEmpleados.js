function AgregarEmpleados() {
    return (
      <div className="container">
        <div className="row " style={{ height: "800px", backgroundColor: "#FF723F" }}>
          <div className="col-3 m-auto text-center pb-5">
            <h3>Empleados</h3>
            <i className="far fa-user fa-10x  text-light"></i>
          </div>
          <div className="col-9">
            <div className="row ">
              <div className="text-center col-12  text-light  h-25" style={{  backgroundColor: "#C42709"}}>
                <div className="row row-cols-4 m-4">
                  <div className="col">
                    <i className=" p-3  rounded-circle fas fa-broom fa-3x "></i>
                  </div>
                  <div className="col ">
                    <i className="p-3  rounded-circle  fas fa-check-circle fa-3x"></i>
                  </div>
                  <div className="col">
                    <i className=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i>
                  </div>
                  <div className="col">
                    <i className="py-3 px-4  rounded-circle fas fa-images fa-3x"></i>
                  </div>
                </div>
              </div>
              <div className="col-8 " style={{ height: "600px" }}>
                <div>
                  <form>
                    <div className="mt-2 mb-3 row">
                      <h4 className="my-4">Información del Empleado</h4>
                      <label className="col-sm-3">Código </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Cédula de identidad</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
  
                    <div className="mt-2  mb-3 row">
                      <label className="col-sm-3">Nombre</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Primer apellido</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
  
                    <div className="mt-2 mb-3 row">
                      <label className="col-sm-3">Segundo apellido</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
  
                    <div className="row my-3 pt-5">
                      <h5>Teléfonos</h5>
                      <div className="col-sm-4">
                        <label>Oficina</label>
                        <input type="text" className="form-control" />
                      </div>
  
  
                      <div className="col-sm-4">
                        <label>Celular</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Puesto
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Puesto 1</option>
                        <option>Puesto 2</option>
                        <option>Puesto 3</option>
                        <option>Puesto 4</option>
                        <option>Puesto 5</option>
                        <option>Puesto 6</option>
                      </select>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Restaurante
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Restaurante 1</option>
                        <option>Restaurante 2</option>
                        <option>Restaurante 3</option>
                      </select>
                </div>
              </div>
                  </form>
                </div>
              </div>
              <div className="col-4 p-0 ">
                <h4 className="m-4">Foto del Empleado</h4>
                <div
                  className="col-sm-4 border border-danger m-auto "
                  style={{ height: "350px", width: "260px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AgregarEmpleados;
  