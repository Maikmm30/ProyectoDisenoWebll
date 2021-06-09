function AperturaCajas() {
  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "800px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Apertura de cajas</h3>
          <i className="fas fa-wallet fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row h-50">
            <div className="text-center col-12 bg-success h-40">
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
            <div className="col-12 bg-danger pt-5 h-100">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label className="col-sm-3 col-form-label">
                        Restaurante
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row mt-2">
                      <label className="col-sm-4 col-form-label">
                        Monto de Apertura
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
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
export default AperturaCajas;
