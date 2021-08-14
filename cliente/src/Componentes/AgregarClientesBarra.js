import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import getCookie from './utils/Cookies';
import Multiselect from 'multiselect-react-dropdown';

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
  const [estadoCuentaClienteBarra, setEstadoCuentaClienteBarra] = useState("");
  let  params = useParams();
  const [showSilla, setShowSilla] = useState(true);
  let arrayNombresPedido = [];
  let arrayPreciosPedido = [];
  let precioTotal1Pedido = 0;
  let pedidoTotal1Pedido = '';
  let errorHandler1Pedido = 0;

 function duracion(entrada, salida){
    var hora2 = entrada.split(":"),
    hora1 = salida.split(":"),
    t1 = new Date(),
    t2 = new Date();
 
    t1.setHours(hora1[0], hora1[1], hora1[2]);
    t2.setHours(hora2[0], hora2[1], hora2[2]);
    t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

    setDuracionClienteBarra(t1.getHours()+':'+t1.getMinutes()+':'+t1.getSeconds())
}

  const generarPdf =() =>{
    desocupaSilla()
     const doc = new jsPDF();
     let tabla =  JSON.parse(params.obj) 
       doc.autoTable({
         head: [['Codigo', 'Nombre', 'Monto Pagado', 'Detalle', 'Numero de silla', 'Fecha', 'Restaurante', 'Tipo de Cliente' ]],
         body: [
           [tabla.codigo, tabla.nombreCompleto, tabla.montoPagado, tabla.detalle, tabla.numeroSillaBarra, tabla.fechaLlegada, tabla.restaurante, tabla.tipoCliente]
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

 const manejoSilla1Pedido = (valor) => {
  precioTotal1Pedido=0;
  var valorSplit = valor.toString().split(',');
  valorSplit.forEach(element => 
    Axios.post("http://localhost:3001/administracion/especiales/especialidades/buscarNombre",{
    restauranteClienteMesa : params.restaurante,
    nombreBusca: element
  }).then((res) => {
    precioTotal1Pedido=precioTotal1Pedido+Number(res.data[0].precio);
    document.getElementById("precio1Pedido").value= precioTotal1Pedido;
    document.getElementById("montoPago").value=precioTotal1Pedido;
  }));
};

  useEffect(() => {
    Axios.get("http://localhost:3001/clientes-barra/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumeroClienteBarra(num);
      const str = "CLI";
      setCodigoClienteBarra(str+num);
    });
    Axios.post("http://localhost:3001/administracion/especiales/especialidades/obtenerEspecialidades",{
      restauranteClienteMesa : params.restaurante
    }).then((res) => {
      for(var k in res.data) {
        arrayNombresPedido.push(res.data[k].nombre);
        arrayPreciosPedido.push(res.data[k].precio);
     }
    }); 
    var hoy = new Date();
    var currentdate = new Date();
    
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
    if(JSON.stringify(params.obj).length > 3){
      setShowSilla(false)
      setNumeroSillaClienteBarra(JSON.parse(params.obj).numeroSillaBarra )
      setRestauranteClienteBarra(JSON.parse(params.obj).restaurante)
      setHoraEntradaClienteBarra(JSON.parse(params.obj).horaEntrada);
      setHoraSalidaClienteBarra(hora);
      setEstadoCuentaClienteBarra('Pago');
      duracion(JSON.parse(params.obj).horaEntrada,hora);
      document.getElementById('ocultarMesa').style.display="none";
      document.getElementById('ocultarMesa1').style.display="none";
      document.getElementById('ocultarMesa2').style.display="none";
      document.getElementById('ocultarMesa3').style.display="none";
      setPrecioClienteBarra(JSON.parse(params.obj).precioBarra)
      setNombreCompletoClienteBarra(JSON.parse(params.obj).nombreCompleto)
      document.getElementById('nombreCompleto').disabled=true;
      document.getElementById('nombreCompleto').value=(JSON.parse(params.obj).nombreCompleto)
      //document.getElementById('precio1Pedido').value=JSON.parse(params.obj).precioBarra;
    }
    else{
      setShowSilla(true)
      setNumeroSillaClienteBarra(params.obj)
      setRestauranteClienteBarra(params.restaurante)
      setHoraEntradaClienteBarra(hora);
      setFechaClienteBarra(currentdate);
      setEstadoCuentaClienteBarra('Sin Pagar')
    }
    console.log(JSON.stringify(params.obj).length)
  

  }, []);
  const desocupaSilla =() =>{
    Axios.put("http://localhost:3001/clientes-barra/updateSillaDisponible",
    {
      numeroSillaClienteBarra: numeroSillaClienteBarra,
      estadoMesaClienteMesa : false,
      restauranteClienteBarra : restauranteClienteBarra
    });
  }


  const enviarDatos = () => {
    console.log('Entró')
    Axios.post("http://localhost:3001/clientes-barra/agregar",{
      codigoClienteBarra: codigoClienteBarra,
      nombreCompletoClienteBarra: nombreCompletoClienteBarra,
      montoPagadoClienteBarra: Number(precioTotal1Pedido),
      restauranteClienteBarra: restauranteClienteBarra,
      fechaClienteBarra: fechaClienteBarra,
      horaEntradaClienteBarra: horaEntradaClienteBarra,
      horaSalidaClienteBarra: horaSalidaClienteBarra,
      duracionClienteBarra: duracionClienteBarra,
      pedidoClienteBarra: pedidoTotal1Pedido.toString(),
      precioClienteBarra: Number(precioTotal1Pedido),
      numeroSillaClienteBarra: numeroSillaClienteBarra,
      estadoCuentaClienteBarra: estadoCuentaClienteBarra
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
      Axios.put("http://localhost:3001/clientes-barra/updateSillaDisponible",
      {
        numeroSillaClienteBarra: numeroSillaClienteBarra,
        estadoSillaCliente : true,
        restauranteClienteBarra : restauranteClienteBarra
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
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={!showSilla  ? deshabilitarAgregar : enviarDatos}></i>
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
                    <input type="text" className="form-control" id="nombreCompleto" onChange={(event)=>{
                  setNombreCompletoClienteBarra(event.target.value);
                }}/>
                    </div>
                  </div>

                  <div className="mt-2  mb-3 row">
                    <label className="col-sm-3">Monto de pago</label>
                    <div className="col-sm-9">
                    <input type="number" className="form-control" id="montoPago" value={precioClienteBarra} disabled />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Restaurante</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(event)=>{
                  setRestauranteClienteBarra(event.target.value);
                }}  value={showSilla ?  params.restaurante : JSON.parse(params.obj).restaurante }
                disabled/>
                    </div>
                  </div>

                  <div className="my-4">
                    <label className="me-2">Hora de Entrada</label>
                    <input type="text" className="form-control" value={horaEntradaClienteBarra} disabled/>

                    <label className="mx-2">Hora de salida</label>
                    <input type="text" className="form-control" value={horaSalidaClienteBarra} disabled/>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Duracion en Barra</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" value={duracionClienteBarra} disabled/>
                    </div>
                  </div>
                </form>
            </div>
            <div className="col-6  p-0">
              <div className="px-3">
                
              </div>
            </div>

            <div class="col">
              <div className="row">
              <div class="col ">
                <h4 className="py-4" id="ocultarMesa3" >Información del pedido</h4>
                <div className="mt-2 form-group row" id="ocultarMesa">
                  <label className="col-sm-5 col-form-label">Pedido</label>
                  <div className="col-sm-6">
                  <Multiselect
                      isObject={false}
                      closeOnSelect={true}
                      onRemove={(value) => {
                        errorHandler1Pedido = errorHandler1Pedido-1
                        if(errorHandler1Pedido!==0){
                          manejoSilla1Pedido(value);
                          pedidoTotal1Pedido=value;
                        }else{
                          precioTotal1Pedido=0;
                          document.getElementById("precio1Pedido").value=0;
                          document.getElementById("montoPago").value=precioTotal1Pedido;
                        }
                        }
                      }
                      onSelect={(value) => {
                        manejoSilla1Pedido(value);
                        pedidoTotal1Pedido=value;
                        errorHandler1Pedido = errorHandler1Pedido+1
                        }
                      }
                      options={arrayNombresPedido}
                    />
                  </div>
                </div>
                <div className="mt-2 form-group row" id="ocultarMesa1">
                  <label className="col-sm-5 col-form-label">Precio</label>
                  <div className="col-sm-6">
                  <input type="number" className="form-control" id="precio1Pedido" value="0" disabled/>
                  </div>
                </div>
                <div className="mt-2 form-group row" id="ocultarMesa2">
                  <label className="col-sm-5 col-form-label">
                    Número de silla
                  </label>
                  <div className="col-sm-6">
                  <input type="number" className="form-control" onChange={(event)=>{
                  setNumeroSillaClienteBarra(event.target.value);
                }}
                value={showSilla ?  params.obj : JSON.parse(params.obj).numeroSillaBarra }
                disabled/>
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
                    <input type="text" className="form-control" value={estadoCuentaClienteBarra} disabled/>
                    </div>
                  </div>
                  <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label">
                  <button onClick={showSilla ?  deshabilitar : generarPdf}> Imprimir factura</button>

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
