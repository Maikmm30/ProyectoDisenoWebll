
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Axios from 'axios';

function AgregarClientesMesas() {
  const [showBuffet, setShowBuffet] = useState(true);

  const [codigoClienteMesa, setCodigoClienteMesa] = useState("");
  const [numeroClienteMesa, setNumeroClienteMesa] = useState("");
  const [nombreCompletoClienteMesa, setNombreCompletoClienteMesa] = useState("");
  const [nombreMesaClienteMesa, setNombreMesaClienteMesa] = useState("");
  const [montoPagadoClienteMesa, setMontoPagadoClienteMesa] = useState("");
  const [restauranteClienteMesa, setRestauranteClienteMesa] = useState("");
  const [reservacionClienteMesa, setReservacionClienteMesa] = useState("");
  const [fechaLlegadaClienteMesa, setFechaLlegadaClienteMesa] = useState("");
  const [fechaReservacionClienteMesa, setFechaReservacionClienteMesa] = useState("");
  const [horaEntradaClienteMesa, setHoraEntradaClienteMesa] = useState("");
  const [horaSalidaClienteMesa, setHoraSalidaClienteMesa] = useState("");
  const [duracionClienteMesa, setDuracionClienteMesa] = useState("");
  const [numeroMesaClienteMesa, setNumeroMesaClienteMesa] = useState("");
  const [pedidoSilla1ClienteMesa, setPedidoSilla1ClienteMesa] = useState("");
  const [pedidoSilla2ClienteMesa, setPedidoSilla2ClienteMesa] = useState("");
  const [pedidoSilla3ClienteMesa, setPedidoSilla3ClienteMesa] = useState("");
  const [pedidoSilla4ClienteMesa, setPedidoSilla4ClienteMesa] = useState("");
  const [precioSilla1ClienteMesa, setPrecioSilla1ClienteMesa] = useState("");
  const [precioSilla2ClienteMesa, setPrecioSilla2ClienteMesa] = useState("");
  const [precioSilla3ClienteMesa, setPrecioSilla3ClienteMesa] = useState("");
  const [precioSilla4ClienteMesa, setPrecioSilla4ClienteMesa] = useState("");
  const [estadoCuentaClienteMesa, setEstadoCuentaClienteMesa] = useState("");
  let  params = useParams();
  // let obj = JSON.parse(JSON.stringify(params));
 const [showMesa, setShowMesa] = useState(true);
 
 const generarPdf =() =>{
  desocupaMesa()
   const doc = new jsPDF();
   let tabla =  JSON.parse(params.obj) 
     doc.autoTable({
       head: [['Codigo', 'Nombre', 'Monto Pagado', 'Detalle', 'Nombre de Mesa', 'Fecha', 'Reservación', 'Restaurante', 'Tipo de Cliente' ]],
       body: [
         [tabla.codigo, tabla.nombreCompleto, tabla.montoPagado, tabla.detalle, tabla.nombreMesa, tabla.fecha, tabla.reservacion, tabla.restaurante, tabla.tipoCliente]
       ],
      
       startY: 40,
       styles: {
       
         halign: 'center',
         cellWidth: 21 
       },
       
     })
    
     window.open(URL.createObjectURL(doc.output("blob")))
     doc.save()
  
    
 }
 const deshabilitar=()=>{
   toast.warning('El cliente no ha realizado el pago',
   {position: toast.POSITION.TOP_CENTER,
    autoClose: 2500})
 }
 const deshabilitarAgregar=()=>{
  toast.warning('El cliente ya ha sido agregado',
  {position: toast.POSITION.TOP_CENTER,
   autoClose: 2500})
}
  useEffect(() => {
    Axios.get("http://localhost:3001/clientes-barra/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroClienteMesa(num);
      const str = "CLI";
      setCodigoClienteMesa(str+num);
      setReservacionClienteMesa(false)
    });
    
    if(JSON.stringify(params.obj).length > 8){
      setShowMesa(false)
      setNombreMesaClienteMesa(JSON.parse(params.obj).nombreMesa )
      setRestauranteClienteMesa(JSON.parse(params.obj).restaurante)

    }
    else{
      setShowMesa(true)
      setNombreMesaClienteMesa(params.obj)
      setRestauranteClienteMesa(params.restaurante)
    }
    console.log(nombreMesaClienteMesa)
  }, []);
  
  const desocupaMesa =() =>{
    Axios.put("http://localhost:3001/clientes-mesa/updateMesaDisponible",
    {
      nombreMesaClienteMesa: nombreMesaClienteMesa,
      estadoMesaClienteMesa : false,
      restauranteClienteMesa : restauranteClienteMesa
    });
  }
  const enviarDatos = () => {

    Axios.post("http://localhost:3001/clientes-mesa/agregar",{
      codigoClienteMesa: codigoClienteMesa,
      nombreCompletoClienteMesa: nombreCompletoClienteMesa,
      nombreMesaClienteMesa: nombreMesaClienteMesa,
      montoPagadoClienteMesa: montoPagadoClienteMesa,
      restauranteClienteMesa: restauranteClienteMesa,
      reservacionClienteMesa: reservacionClienteMesa,
      fechaLlegadaClienteMesa: fechaLlegadaClienteMesa,
      fechaReservacionClienteMesa: fechaReservacionClienteMesa,
      horaEntradaClienteMesa: horaEntradaClienteMesa,
      horaSalidaClienteMesa: horaSalidaClienteMesa,
      duracionClienteMesa: duracionClienteMesa,
      numeroMesaClienteMesa: numeroMesaClienteMesa,
      pedidoSilla1ClienteMesa: pedidoSilla1ClienteMesa,
      pedidoSilla2ClienteMesa: pedidoSilla2ClienteMesa,
      pedidoSilla3ClienteMesa: pedidoSilla3ClienteMesa,
      pedidoSilla4ClienteMesa: pedidoSilla4ClienteMesa,
      precioSilla1ClienteMesa: precioSilla1ClienteMesa,
      precioSilla2ClienteMesa: precioSilla2ClienteMesa,
      precioSilla3ClienteMesa: precioSilla3ClienteMesa,
      precioSilla4ClienteMesa: precioSilla4ClienteMesa,
      estadoCuentaClienteMesa: estadoCuentaClienteMesa,
    });
 

    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '23',
        consecutivoNuevo: numeroClienteMesa,
        columnaSeleccionada: 'valorConsecutivo'
      });
      Axios.put("http://localhost:3001/clientes-mesa/updateMesaDisponible",
      {
        nombreMesaClienteMesa: nombreMesaClienteMesa,
        estadoMesaClienteMesa : true,
        restauranteClienteMesa : restauranteClienteMesa
      });
      console.log(nombreMesaClienteMesa)
      console.log(nombreMesaClienteMesa)
    window.location.href = 'http://localhost:3000/clientesMesas'
  };

  function reservacionChecked() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked === true){
      setReservacionClienteMesa(true)
    } else {
      setReservacionClienteMesa(false);
    }
  }


  return (
    <div className="container" style={{backgroundColor:  "#FF723F"}}>
      <div className="estilocambia row " style={{ height : showBuffet ? '980px' : '1510px' }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Clientes</h3>
          <i className="fas fa-utensils fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row ">
            <div className="text-center col-12 h-25" style={{  backgroundColor: "#C42709"}}>
              <div className="row row-cols-3 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x " onClick={!showMesa  ? deshabilitarAgregar : enviarDatos}></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              Level 2
              <div className="">
                <form action="">
                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Código Cliente</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        value={codigoClienteMesa} disabled
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
                        onChange={(event)=>{
                          setNombreCompletoClienteMesa(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Nombre de la mesa</label>
                    <div className="col-sm-9">

                    <input
                    type="text"
                    className="form-control"
                    onChange={(event)=>{
                      setNombreMesaClienteMesa(event.target.value);
                    }}
                    value={showMesa ?  params.obj : JSON.parse(params.obj).nombreMesa }
                    disabled
                  />

                    </div>
                  </div>

                  <div className="mt-2  mb-3 row">
                    <label className="col-sm-3">Monto de pago</label>
                    <div className="col-sm-9">
                    <input type="number" className="form-control" onChange={(event)=>{
                  setMontoPagadoClienteMesa(event.target.value);
                }}/>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Restaurante</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setRestauranteClienteMesa(event.target.value)}}
                  value={showMesa ?  params.restaurante : JSON.parse(params.obj).restaurante }
                  disabled/>
                    </div>
                  </div>

                  <div className="my-4">
                    <label className="me-2">Hora de Entrada</label>
                    <input type="time" className="form-control" onChange={(event)=>{
                  setHoraEntradaClienteMesa(event.target.value);
                }}/>

                    <label className="mx-2">Hora de salida</label>
                    <input type="time" className="form-control" onChange={(event)=>{
                  setHoraSalidaClienteMesa(event.target.value);
                }}/>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Duracion en Mesa</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setDuracionClienteMesa(event.target.value);
                }}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6  p-0 ">
              Level 4
              <div className="reservacion mt-3 p-2">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="myCheck"
                    onClick={reservacionChecked}
                  />
                  <label className="form-check-label">Reservación</label>
                </div>
                <div className="mt-4">
                  <label className="me-2">Fecha de llegada</label>
                  <input type="date" className="form-control" onChange={(event)=>{
                  setFechaLlegadaClienteMesa(event.target.value);
                }}/>
                </div>
                <div className="mt-4">
                  <label className="me-2">Fecha de reservacion</label>
                  <input type="date" className="form-control" onChange={(event)=>{
                  setFechaReservacionClienteMesa(event.target.value);
                }}/>
                </div>
              </div>
              <div className="facturacion p-2 h-75 mt-5 ">
                Estado de facturacion
                <div className="mb-3 row pt-4">
                  <label className="col-sm-3 col-form-label">
                    Estado de la Cuenta
                  </label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setEstadoCuentaClienteMesa(event.target.value);
                }}/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label">
                  <button onClick={showMesa ?  deshabilitar : generarPdf}> Imprimir factura</button>
                   
                  </label>
                  <div className="col-sm-2">
                    <i className="fas fa-print fa-5x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pb-3"  style={{  backgroundColor: "#C42709"}} >
              <div className="mt-2 form-group row">
                <label className="col-sm-2 col-form-label">
                  Número de mesa
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setNumeroMesaClienteMesa(event.target.value);
                }}/>
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 1
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control" onChange={(event)=>{
                  setPedidoSilla1ClienteMesa(event.target.value);
                }}>
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setPrecioSilla1ClienteMesa(event.target.value);
                }}/>
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
              <div className="form-group row mt-2" >
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 2
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control" onChange={(event)=>{
                  setPedidoSilla2ClienteMesa(event.target.value);
                }}>
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setPrecioSilla2ClienteMesa(event.target.value);
                }}/>
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
                  Pedido silla N° 3
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control" onChange={(event)=>{
                  setPedidoSilla3ClienteMesa(event.target.value);
                }}>
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setPrecioSilla3ClienteMesa(event.target.value);
                }}/>
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
              <div className="form-group row mt-2" >
                <label className="col-sm-2 col-form-label">
                  Pedido silla N° 4
                </label>
                <div className="col-sm-3">
                  <select id="inputState" className="form-control" onChange={(event)=>{
                  setPedidoSilla4ClienteMesa(event.target.value);
                }}>
                    <option value="choose">...</option>
                    <option value="choose">...</option>
                  </select>
                </div>
                <label className="col-sm-1 col-form-label">Precio</label>
                <div className="col-sm-3">
                  <input type="text" className="form-control" onChange={(event)=>{
                  setPrecioSilla4ClienteMesa(event.target.value);
                }}/>
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

            <div className={ showBuffet ? "pb-3 ps-5 d-none" : ' pb-3 ps-5'} style={{  backgroundColor: "#C42709"}}>
              <div className="row">
                <div className="col ps-5 mb-5">
                  <label className="col-sm-7 col-form-label">
                    Pedido silla N° 1
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-7 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <label className="col-sm-7 col-form-label">
                    Pedido silla N° 2
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-7 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col ps-5">
                  <label className="col-sm-7 col-form-label">
                    Pedido silla N° 3
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-7 col-form-label">Precio</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <label className="col-sm-7 col-form-label">
                    Pedido silla N° 4
                  </label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <label className="col-sm-7 col-form-label">Precio</label>
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

export default AgregarClientesMesas;
