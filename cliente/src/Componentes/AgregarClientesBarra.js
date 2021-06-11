function AgregarClientesBarra() {
  return (
    <div className="container">
      <div className="estilocambia row bg-warning" style={{ height: "900px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Barra</h3>
          <i className="fas fa-glass-martini-alt fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row ">
            <div className="text-center col-12 bg-success h-25">
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
            <div className="col-6 bg-danger">
              <h4 className="py-4">Datos del cliente</h4>
                <form action="">
                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Código Cliente</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Nombre del cliente</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Nombre de la mesa</label>
                    <div className="col-sm-9">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="...">Mesa1</option>
                        <option value="...">Mesa2</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2  mb-3 row">
                    <label className="col-sm-3">Monto de pago</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Restaurante</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div className="my-4">
                    <label className="me-2">Hora de Entrada</label>
                    <input type="time" name="" id="" />

                    <label className="mx-2">Hora de salida</label>
                    <input type="time" name="" id="" />
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Duracion en Barra</label>
                    <div className="col-sm-9">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="1">1 hora</option>
                        <option value="2">2 horas</option>
                      </select>
                    </div>
                  </div>
                </form>
            </div>
            <div className="col-6 bg-primary p-0 border border-danger">
              <div className="px-3">
                <h4 className= 'py-4'>Pedidos previos</h4>
                <textarea className="ms-5" name="" id="" cols="40" rows="15" readOnly></textarea>
              </div>
            </div>

            <div class="col">
              <div className="row">
              <div class="col bg-info">
                <h4 className="py-4">Información del pedido</h4>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">Pedido</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">
                    Número de silla
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div class="col bg-light">
            
                <h4 className="py-4">  Estado de facturación </h4>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Estado de la Cuenta
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-5 col-form-label">
                      Imprimir factura
                    </label>
                    <div className="col">
                      <i className="fas fa-print fa-4x"></i>
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

export default AgregarClientesBarra;
