import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarClientesBarra() {

  const [codigoClienteBarra, setCodigoClienteBarra] = useState("");
  const [numeroClienteBarra, setNumeroClienteBarra] = useState("");
  const [nombreCompletoClienteBarra, setNombreCompletoClienteBarra] = useState("");
  const [montoPagadoClienteBarra, setMontoPagadoClienteBarra] = useState("");
  const [restauranteClienteBarra, setRestauranteClienteBarra] = useState("");
  const [fechaClienteBarra, setFechaClienteBarra] = useState("");
  const [horaEntradaClienteBarra, setHoraEntradaClienteBarra] = useState("");
  const [horaSalidaClienteBarra, setHoraSalidaClienteBarra] = useState("");
  const [duracionClienteBarra, setDuracionClienteBarra] = useState("");
  const [pedidoClienteBarra, setPedidoClienteBarra] = useState("");
  const [precioClienteBarra, setPrecioClienteBarra] = useState("");
  const [numeroSillaClienteBarra, setNumeroSillaClienteBarra] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/clientes-barra/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroClienteBarra(num);
      const str = "CLI";
      setCodigoClienteBarra(str+num);
      setFechaClienteBarra('05/07/21')
    });
    
  }, []);

  const enviarDatos = () => {
    console.log('Entró')
    Axios.post("http://localhost:3001/clientes-barra/agregar",{
      codigoClienteBarra: codigoClienteBarra,
      nombreCompletoClienteBarra: nombreCompletoClienteBarra,
      montoPagadoClienteBarra: montoPagadoClienteBarra,
      restauranteClienteBarra: restauranteClienteBarra,
      fechaClienteBarra: fechaClienteBarra,
      horaEntradaClienteBarra: horaEntradaClienteBarra,
      horaSalidaClienteBarra: horaSalidaClienteBarra,
      duracionClienteBarra: duracionClienteBarra,
      pedidoClienteBarra: pedidoClienteBarra,
      precioClienteBarra: precioClienteBarra,
      numeroSillaClienteBarra: numeroSillaClienteBarra,
    });

    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoClienteBarra+': '+getCookie('usuario')+' agregó un cliente',

    });
    console.log('Codigo'+codigoClienteBarra)
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '23',
        consecutivoNuevo: numeroClienteBarra,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/clientesBarra'
  };

  return (
    <div className="container" style={{backgroundColor:  "#FF723F"}}>
      <div className="estilocambia row " style={{ height: "1000px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Barra</h3>
          <i className="fas fa-glass-martini-alt fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row ">
            <div className="text-center col-12 h-25"  style={{  backgroundColor: "#C42709"}}>
              <div className="row row-cols-3 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <h4 className="py-4">Datos del cliente</h4>
                <form action="">
                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Código Cliente</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" value={codigoClienteBarra} disabled/>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Nombre del cliente</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setNombreCompletoClienteBarra(event.target.value);
                }}/>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Nombre de la mesa</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="mt-2  mb-3 row">
                    <label className="col-sm-3">Monto de pago</label>
                    <div className="col-sm-9">
                    <input type="number" className="form-control" onChange={(event)=>{
                  setMontoPagadoClienteBarra(event.target.value);
                }}/>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Restaurante</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setRestauranteClienteBarra(event.target.value);
                }}/>
                    </div>
                  </div>

                  <div className="my-4">
                    <label className="me-2">Hora de Entrada</label>
                    <input type="time" className="form-control" onChange={(event)=>{
                  setHoraEntradaClienteBarra(event.target.value);
                }}/>

                    <label className="mx-2">Hora de salida</label>
                    <input type="time" className="form-control" onChange={(event)=>{
                  setHoraSalidaClienteBarra(event.target.value);
                }}/>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Duracion en Barra</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setDuracionClienteBarra(event.target.value);
                }}/>
                    </div>
                  </div>
                </form>
            </div>
            <div className="col-6  p-0">
              <div className="px-3">
                <h4 className= 'py-4'>Pedidos previos</h4>
                <textarea className="ms-5" name="" id="" cols="40" rows="15" readOnly></textarea>
              </div>
            </div>

            <div class="col">
              <div className="row">
              <div class="col ">
                <h4 className="py-4">Información del pedido</h4>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">Pedido</label>
                  <div className="col-sm-6">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setPedidoClienteBarra(event.target.value);
                }}/>
                  </div>
                </div>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-6">
                  <input type="number" className="form-control" onChange={(event)=>{
                  setPrecioClienteBarra(event.target.value);
                }}/>
                  </div>
                </div>
                <div className="mt-2 form-group row">
                  <label className="col-sm-5 col-form-label">
                    Número de silla
                  </label>
                  <div className="col-sm-6">
                  <input type="number" className="form-control" onChange={(event)=>{
                  setNumeroSillaClienteBarra(event.target.value);
                }}/>
                  </div>
                </div>
              </div>
              <div class="col">
            
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
                  <label className="col-sm-4 col-form-label">
                      <button>
                        Imprimir factura
                      </button>
                    </label>
                    <div className="col">
                      <i className="fas fa-print fa-5x"></i>
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
