import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function CierreCajas() {
  const [codigoCaja, setCodigoCaja] = useState("");
  const [numeroCaja, setNumeroCaja] = useState("");
  const [restauranteCaja, setRestauranteCaja] = useState("");
  const [entradaDineroCaja, setEntradaDineroCaja] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/cajas/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroCaja(num);
      const str = "CA";
      console.log(num);
      setCodigoCaja(str + num);
    });

    Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
      console.log('data'+res.data)
      console.log(res.data[1]);
      var array = [];
      var primerValor = true;
      for(var k in res.data) {
        if (primerValor === true){
          setRestauranteCaja(res.data[k].nombre);
          primerValor = false;
        }
        console.log(array.push(res.data[k].nombre));
     }
     for(var i in array)
     { 
         document.getElementById("restaurante").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 

     }
    }); 

  }, []);

  const enviarDatos = () => {
    
    var currentdate = new Date();
    Axios.post("http://localhost:3001/cajas/agregar", {
      //codigoCaja: codigoCaja,
      //numeroCaja: numeroCaja,
      codigoCaja: codigoCaja,
      entradaDineroCaja: entradaDineroCaja,
      fechaCaja: currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear(),
      restauranteCaja: restauranteCaja,
      aperturaCaja: false,
      descripcionCaja: "Cierre de Caja",
      cierreCaja: true,
      estadoCaja: true
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoCaja+': '+getCookie('usuario')+' agregó un cierre de caja',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '22',
        consecutivoNuevo: numeroCaja,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/cajas'
  };

    return (
      <div className="container">
        <div className="row " style={{ height: "650px", backgroundColor: "#FF723F" }}>
          <div className="col-3 m-auto text-center pb-5">
            <h3>Cierre de cajas</h3>
            <i className="fas fa-wallet fa-10x"></i>
          </div>
          <div className="col-9">
            <div className="row h-50">
              <div className="text-center col-12 h-40" style={{ backgroundColor: "#C42709" }}>
                <div className="row row-cols-2 m-4">
                  <div className="col ">
                    <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                  </div>
                  <div className="col">
                    <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-5 h-100">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="form-group row mt-2">
                        <label className="col-sm-3 col-form-label">
                          Restaurante
                        </label>
                        <div className="col-sm-8">
                        <select
                      class="form-control"
                      id="restaurante"
                      onChange={(event)=>{
                        setRestauranteCaja(event.target.value);
                      }}
                      onClick={(event)=>{
                        setRestauranteCaja(event.target.value);
                      }}
                    >
                      </select>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group row mt-2">
                        <label className="col-sm-4 col-form-label">
                          Monto de Cierre
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            onChange={(event)=>{
                              setEntradaDineroCaja(event.target.value);
                            }}
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
  export default CierreCajas;
  