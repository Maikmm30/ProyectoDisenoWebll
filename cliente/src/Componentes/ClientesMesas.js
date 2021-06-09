import React, {useState} from 'react';
function ClientesMesas() {

const [showBuffet, setShowBuffet] = useState(true);

  return (
    <div className="container">
      <div className="estilocambia row bg-warning" style={{ height : showBuffet ? '900px' : '1500px' }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Clientes</h3>
          <i className="fas fa-utensils fa-10x"></i>
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
              Level 2
              <div className="">
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
                    <label className="col-sm-3">Duracion en Mesa</label>
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
            </div>
            <div className="col-6 bg-primary p-0 border border-danger">
              Level 4
              <div className="reservacion mt-3 p-2">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label">Reservación</label>
                </div>
                <div className="mt-4">
                  <label className="me-2">Fecha de llegada</label>
                  <input type="date" name="" id="" />
                </div>
                <div className="mt-4">
                  <label className="me-2">Fecha de reservacion</label>
                  <input type="date" name="" id="" />
                </div>
              </div>
              <div className="facturacion p-2 h-75 mt-5 bg-light border border-warning">
                Estado de facturacion
                <div className="mb-3 row pt-4">
                  <label className="col-sm-3 col-form-label">
                    Estado de la Cuenta
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-6 col-form-label">
                    Imprimir factura
                  </label>
                  <div className="col-sm-2">
                    <i className="fas fa-print fa-5x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-success pb-3">
              <div className="mt-2 form-group row">
                <label className="col-sm-2 col-form-label">
                  Número de mesa
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control">
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    onClick={()=> setShowBuffet(!showBuffet)}
                  />
                  <label className="form-check-label ms-2">Buffet</label>
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control">
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    onClick={()=> setShowBuffet(!showBuffet)}
                  />
                  <label className="form-check-label ms-2">Buffet</label>
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control">
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    onClick={()=> setShowBuffet(!showBuffet)}
                  />
                  <label className="form-check-label ms-2">Buffet</label>
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control">
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    onClick={()=> setShowBuffet(!showBuffet)}
                  />
                  <label className="form-check-label ms-2">Buffet</label>
                </div>
              </div>
            </div>

            <div className={ showBuffet ? "bg-light pb-3 ps-5 d-none" : 'bg-light pb-3 ps-5'}>
              <div className="row">
                <div className="col ps-5 mb-5">
                  <label className="col-sm-5 col-form-label">
                    Pedido silla N° 1
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <label className="col-sm-5 col-form-label">
                    Pedido silla N° 2
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col ps-5">
                  <label className="col-sm-5 col-form-label">
                    Pedido silla N° 3
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <label className="col-sm-5 col-form-label">
                    Pedido silla N° 4
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
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

export default ClientesMesas;
