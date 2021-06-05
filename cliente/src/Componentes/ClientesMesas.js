import { Container, Row, Col } from "react-bootstrap";
function ClientesMesas() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "1000px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Menú</h3>
          <i class="fas fa-utensils fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-50">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 bg-danger h-100">
              Level 2
              <div class="">
                <form action="">
                  <div class="mt-2 mb-3 row">
                    <label class="col-sm-3" for="inputEmail4">
                      Código Cliente
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div class="mt-2 mb-3 row">
                    <label class="col-sm-3">Nombre del cliente</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div class="mt-2 mb-3 row">
                    <label class="col-sm-3">Nombre de la mesa</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div class="mt-2  mb-3 row">
                    <label class="col-sm-3">Monto de pago</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div class="mt-2 mb-3 row">
                    <label class="col-sm-3">Restaurante</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div class="my-4">
                    <label for="inputEmail4" class="me-2">
                      Hora de Entrada
                    </label>
                    <input type="time" name="" id="" />

                    <label for="inputEmail4" class="mx-2">
                      Hora de salida
                    </label>
                    <input type="time" name="" id="" />
                  </div>

                  <div class="mt-2 mb-3 row">
                    <label class="col-sm-3">Duracion en Mesa</label>
                    <div className="col-sm-9">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-6 bg-primary p-0 border border-danger">
              Level 4
              <div className="reservacion mt-3 p-2">
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Reservación
                  </label>
                </div>
                <div class="mt-4">
                  <label class="me-2">Fecha de llegada</label>
                  <input type="date" name="" id="" />
                </div>
                <div class="mt-4">
                  <label for="inputEmail4" class="me-2">
                    Fecha de reservacion
                  </label>
                  <input type="date" name="" id="" />
                </div>
              </div>
              <div className="facturacion p-2 h-75 mt-5 bg-light border border-warning">
                Estado de facturacion
                <div class="mb-3 row pt-4">
                  <label class="col-sm-3 col-form-label">
                    Estado de la Cuenta
                  </label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-6 col-form-label">
                    Imprimir factura
                  </label>
                  <div class="col-sm-2">
                    <i class="fas fa-print fa-5x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 bg-success h-75">
              ultima
              <div class="mt-2">
                <label for="inputEmail4">Número de mesa</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div class="col-sm-3">
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">
                  Precio
                </label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" />
                </div>
                <div class="col-sm-3 ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label ms-2" for="">
                    Buffet
                  </label>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div class="col-sm-3">
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">
                  Precio
                </label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" />
                </div>
                <div class="col-sm-3 ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label ms-2" for="">
                    Buffet
                  </label>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div class="col-sm-3">
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">
                  Precio
                </label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" />
                </div>
                <div class="col-sm-3 ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label ms-2" for="">
                    Buffet
                  </label>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div class="col-sm-3">
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">
                  Precio
                </label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" />
                </div>
                <div class="col-sm-3 ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label ms-2" for="">
                    Buffet
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientesMesas;
