function AgregarPaises() {
    return (
      <div className="container">
        <div className="row bg-warning" style={{ height: "650px" }}>
          <div className="col-3 m-auto text-center pb-5">
            <h3 className="mb-4 text-center">Países</h3>
            <i className="fas fa-globe-americas fa-10x"></i>
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
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-images fa-3x"></i>
                  </div>
                </div>
              </div>
  
              <h4>Información de los Países</h4>
              <div className="row mt-2 mb-3">
                <label className="col-sm-3">Código del País</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3">
                  Nombre del País
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3 me-3">
                  Bandera del País
                </label>
                <div className="col-sm-4 border border-danger "  style={{ height: "200px", width: '320px' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default AgregarPaises;
  