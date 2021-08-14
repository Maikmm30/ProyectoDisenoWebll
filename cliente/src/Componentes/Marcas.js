import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function Marcas() {

  const [codigoMarca, setCodigoMarca] = useState("");
  const [numeroMarca, setNumeroMarca] = useState("");
  const [nombreMarca, setNombreMarca] = useState("");
  const [nacionalidadMarca, setNacionalidadMarca] = useState("");
  const [descripcionMarca, setDescripcionMarca] = useState("");
  const [cedulaJuridicaMarca, setCedulaJuridicaMarca] = useState("");
  const [empresaMarca, setEmpresaMarca] = useState("");
  const [detalleEmpresaMarca, setDetalleEmpresaMarca] = useState("");
  const [telefonoEmpresaMarca, setTelefonoEmpresaMarca] = useState("");

  //Manejar imagen
  const [fileInputState01, setFileInputState01] = useState('');
  const [fileInputState02, setFileInputState02] = useState('');
  const [selectedFile01, setSelectedFile01] = useState('');
  const [selectedFile02, setSelectedFile02] = useState('');
  const [previewSource01, setPreviewSource01] = useState('');
  const [previewSource02, setPreviewSource02] = useState('');


  useEffect(() => {
    Axios.get("http://localhost:3001/marcas/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroMarca(num);

      const str = "M";
      setCodigoMarca(str + num);

      console.log(num)
      Axios.get("http://localhost:3001/paises/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        for (var k in res.data) {
          console.log(array.push(res.data[k].nombre));
        }
        for (var i in array) {
          document.getElementById("nacionalidad").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
    });

  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/marcas/agregar", {
      codigoMarca: codigoMarca,
      numeroMarca: numeroMarca,
      nombreMarca: nombreMarca,
      nacionalidadMarca: nacionalidadMarca,
      descripcionMarca: descripcionMarca,
      cedulaJuridicaMarca: cedulaJuridicaMarca,
      empresaMarca: empresaMarca,
      detalleEmpresaMarca: detalleEmpresaMarca,
      telefonoEmpresaMarca: telefonoEmpresaMarca,
      estadoEmpaque: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoMarca + ': ' + getCookie('usuario') + ' agregó una marca',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '18',
        consecutivoNuevo: numeroMarca,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/listaMarcas/'
  };

  const handleFileInputChange01 = (e) => {
    const file = e.target.files[0];
    previewFile01(file);
    setSelectedFile01(file);
    setFileInputState01(e.target.value);
  }

  const handleFileInputChange02 = (e) => {
    const file = e.target.files[0];
    previewFile02(file);
    setSelectedFile02(file);
    setFileInputState02(e.target.value);
  }

  const previewFile01 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource01(reader.result);
    }
  }

  const previewFile02 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource02(reader.result);
    }
  }

  return (
    <div class="container">
      <div class="row" style={{ height: "800px", backgroundColor: "#FF723F" }} >
        <div class="col-3 m-auto text-center pb-5">
          <h3>Marcas</h3>
          <i class="far fa-copyright fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12  h-25" style={{ backgroundColor: "#C42709" }}>
              <div class="row row-cols-3 m-4">
                <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 h-100">
              Información de la Marca
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    readonly="readonly"
                    value={codigoMarca}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(event) => {
                      setNombreMarca(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Nacionalidad
                </label>
                <div class="col-sm-8">
                  <select
                    class="form-control"
                    id="nacionalidad"
                    onChange={(event) => {
                      setNacionalidadMarca(event.target.value);
                    }}
                    onClick={(event) => {
                      setNacionalidadMarca(event.target.value);
                    }}
                  >
                  </select>
                </div>

              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Descripción
                </label>
                <div class="col-sm-8">
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={(event) => {
                      setDescripcionMarca(event.target.value);
                    }}
                    rows="3"
                  />
                </div>
                <div class="form-group row mt-2">
                  <div className=" row mt-2 mb-3">
                    <label for="staticEmail" className="col-sm-3 me-3">
                      Imagen
                    </label>

                    {previewSource01 && (
                      <img
                        src={previewSource01}
                        alt="chosen"
                        style={{ height: '200px', width: '350px' }}
                      />

                    )}

                    <input type="file" name="image" onChange={handleFileInputChange01}
                      className="form-input" />
                  </div>


                </div>
              </div>
            </div>
            <div class="col-6  p-0 ">

              Información del Contacto
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Cédula Jurídica
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    onChange={(event) => {
                      setCedulaJuridicaMarca(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Nombre Empresa
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(event) => {
                      setEmpresaMarca(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Detalle Empresa
                </label>
                <div class="col-sm-8">
                  <textarea
                    type="text"
                    class="form-control"
                    rows="3"
                    onChange={(event) => {
                      setDetalleEmpresaMarca(event.target.value);
                    }}
                  />
                </div>

              </div>

              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Teléfono
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(event) => {
                      setTelefonoEmpresaMarca(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group row mt-2">
                  <div className=" row mt-2 mb-3">
                    <label for="staticEmail" className="col-sm-3 me-3">
                      Imagen:
                    </label>


                    {previewSource02 && (
                      <img
                        src={previewSource02}
                        alt="chosen"
                        style={{ height: '200px', width: '350px' }}
                      />

                    )}

                    <input type="file" name="image" onChange={handleFileInputChange02}
                      className="form-input" />
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
export default Marcas;
