import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarBebidaGaseosa() {

  const [codigoBebidaGaseosa, setCodigoBebidaGaseosa] = useState("");
  const [numeroBebidaGaseosa, setNumeroBebidaGaseosa] = useState("");
  const [nombreBebidaGaseosa, setNombreBebidaGaseosa] = useState("");
  const [marcaBebidaGaseosa, setMarcaBebidaGaseosa] = useState("");
  const [nacionalidadBebidaGaseosa, setNacionalidadBebidaGaseosa] = useState("");
  const [precioBebidaGaseosa, setPrecioBebidaGaseosa] = useState("");
  const [restauranteBebidaGaseosa, setRestauranteBebidaGaseosa] = useState("");
  const [descripcionBebidaGaseosa, setDescripcionBebidaGaseosa] = useState("");
  const [cantidadBebidaGaseosa, setCantidadBebidaGaseosa] = useState("");

  //Manejar imagen
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/administracion/especiales/bebidas/gaseosas/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroBebidaGaseosa(num);
      const str = "BG";
      setCodigoBebidaGaseosa(str + num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for (var k in res.data) {
          if (primerValor === true) {
            setRestauranteBebidaGaseosa(res.data[k].nombre);
            primerValor = false;
          }
          console.log(array.push(res.data[k].nombre));
        }
        for (var i in array) {
          document.getElementById("restaurante").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
      Axios.get("http://localhost:3001/paises/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for (var k in res.data) {
          if (primerValor === true) {
            setNacionalidadBebidaGaseosa(res.data[k].nombre);
            primerValor = false;
          }
          console.log(array.push(res.data[k].nombre));
        }
        for (var i in array) {
          document.getElementById("nacionalidad").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
      Axios.get("http://localhost:3001/marcas/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        for (var k in res.data) {
          if (primerValor === true) {
            setMarcaBebidaGaseosa(res.data[k].nombre);
            primerValor = false;
          }
          console.log(array.push(res.data[k].nombre));
        }
        for (var i in array) {
          document.getElementById("marcas").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/administracion/especiales/bebidas/gaseosas/agregar", {
      codigoBebidaGaseosa: codigoBebidaGaseosa,
      nombreBebidaGaseosa: nombreBebidaGaseosa,
      marcaBebidaGaseosa: marcaBebidaGaseosa,
      nacionalidadBebidaGaseosa: nacionalidadBebidaGaseosa,
      precioBebidaGaseosa: precioBebidaGaseosa,
      restauranteBebidaGaseosa: restauranteBebidaGaseosa,
      descripcionBebidaGaseosa: descripcionBebidaGaseosa,
      cantidadBebidaGaseosa: cantidadBebidaGaseosa,
      estadoBebidaGaseosa: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoBebidaGaseosa + ': ' + getCookie('usuario') + ' agreg?? una bebida gaseosa',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '1',
        consecutivoNuevo: numeroBebidaGaseosa,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/administracion/especiales/bebidas/gaseosas/'
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    }
  }


  return (
    <div class="container">
      <div class="row " style={{ height: "800px", backgroundColor: "#FF723F" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Agregar Bebida Gaseosa</h3>
          <i class="fas fa-glass-whiskey fa-10x text-light"></i>
        </div>
        <div class="col-9" >
          <div class="row">
            <div class="text-center mb-3 col-12 text-light  h-35" style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-4 m-4">
                <div class="col"><i class="p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col"><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class="py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>
                <div class="col"><i class="fas fa-search fa-4x"></i></div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h4>Informaci??n de la Gaseosa</h4>
                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">C??digo</label>
                  <div class="col-sm-8">
                    <input type="text" className="form-control" value={codigoBebidaGaseosa} disabled />
                  </div>
                </div>
                <div class="row mt-2 mb-3">
                  <label class="col-sm-3">Nombre</label>
                  <div class="col-sm-8">
                    <input type="text" className="form-control" onChange={(event) => {
                      setNombreBebidaGaseosa(event.target.value);
                    }} />
                  </div>
                </div>
                <div class=" row mt-2 mb-2">
                  <label class="col-sm-3 ">Marca</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="marcas"
                      onChange={(event) => {
                        setMarcaBebidaGaseosa(event.target.value);
                      }}
                      onClick={(event) => {
                        setMarcaBebidaGaseosa(event.target.value);
                      }}
                    >

                    </select>
                  </div>
                </div>

                <div class="form-group row mt-3 mb-2">
                  <label class="col-sm-3 ">Nacionalidad</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="nacionalidad"
                      onChange={(event) => {
                        setNacionalidadBebidaGaseosa(event.target.value);
                      }}
                      onClick={(event) => {
                        setNacionalidadBebidaGaseosa(event.target.value);
                      }}
                    >

                    </select>
                  </div>

                </div>

                <div class="row mt-4 mb-3">
                  <label class="col-sm-3 ">Precio</label>
                  <div class="col-sm-8">
                    <input type="number" className="form-control" onChange={(event) => {
                      setPrecioBebidaGaseosa(event.target.value);
                    }} />
                  </div>
                </div>

              </div>
              <div class="col">

                <div class="form-group row mt-5 mb-2">
                  <label class="col-sm-3 ">Restaurante</label>
                  <div class="col-sm-8">
                    <select
                      class="form-control"
                      id="restaurante"
                      onChange={(event) => {
                        setRestauranteBebidaGaseosa(event.target.value);
                      }}
                      onClick={(event) => {
                        setRestauranteBebidaGaseosa(event.target.value);
                      }}
                    >
                    </select>
                  </div>

                </div>
                <div class="row mt-3 mb-2">
                  <label class="col-sm-3 ">Cantidad</label>
                  <div class="col-sm-8">
                    <input type="number" className="form-control" onChange={(event) => {
                      setCantidadBebidaGaseosa(event.target.value);
                    }} />
                  </div>
                </div>
                <div class="row mt-3 ">
                  <label class="col-sm-3">Descripcion</label>
                  <div class="col-sm-8" >
                    <textarea
                      class="form-control"
                      rows="4"
                      onChange={(event) => {
                        setDescripcionBebidaGaseosa(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className=" row mt-2 mb-3">
                  <label for="staticEmail" className="col-sm-3 me-3">
                    Imagen:
                  </label>

                  {previewSource && (
                    <img
                      src={previewSource}
                      alt="chosen"
                      style={{ height: '200px', width: '350px' }}
                    />

                  )}

                  <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState}
                    className="form-input" />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarBebidaGaseosa;
