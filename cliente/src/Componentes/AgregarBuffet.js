import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarBuffet() {

  const [codigoBuffet, setCodigoBuffet] = useState("");
  const [numeroBuffet, setNumeroBuffet] = useState("");
  const [nombreBuffet, setNombreBuffet] = useState("");
  const [precioBuffet, setPrecioBuffet] = useState("");
  const [tipoBuffet, setTipoBuffet] = useState("");
  const [unidadBuffet, setUnidadBuffet] = useState("");

  //Manejar imagen
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');


  useEffect(() => {
    Axios.get("http://localhost:3001/buffet/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroBuffet(num);

      const str = "B";
      setCodigoBuffet(str + num);

      Axios.get("http://localhost:3001/unidadMedida/names").then((res) => {
        console.log('data' + res.data)
        console.log(res.data[1]);
        var array = [];
        var primerValor = true;
        setTipoBuffet('Marina');
        for (var k in res.data) {
          if (primerValor === true) {
            setUnidadBuffet(res.data[k].detalle);
            primerValor = false;
          }
          console.log(array.push(res.data[k].detalle));
        }
        for (var i in array) {
          document.getElementById("unidad").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

        }
      });
    });

  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/buffet/agregar", {
      codigoBuffet: codigoBuffet,
      numeroBuffet: numeroBuffet,
      nombreBuffet: nombreBuffet,
      precioBuffet: precioBuffet,
      tipoBuffet: tipoBuffet,
      unidadBuffet: unidadBuffet,
      estadoBuffet: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoBuffet + ': ' + getCookie('usuario') + ' agregó un buffet',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '19',
        consecutivoNuevo: numeroBuffet,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/administracion/especiales/buffet/'
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
    <div className="container">
      <div className="row " style={{ height: "800px", backgroundColor: "#FF723F" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Agregar Buffet</h3>
          <i className="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12  h-25" style={{ backgroundColor: "#C42709" }}>
              <div className="row row-cols-4 m-4  text-light">
                <div className="col"><i className="p-3 ght rounded-circle fas fa-broom fa-3x "></i></div>
                <div className="col"><i className="p-3 ght rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                <div className="col"><i className="py-3 px-4 ght rounded-circle fas fa-times fa-3x"></i></div>
                <div className="col"><i className="fas fa-search fa-4x"></i></div>

              </div>
            </div>
            <div className="col-12 h-80">
              Información de la comida tipo Buffet
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Código
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    readonly="readonly"
                    value={codigoBuffet}
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      setNombreBuffet(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Precio
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(event) => {
                      setPrecioBuffet(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Tipo
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(event) => {
                      setTipoBuffet(event.target.value);
                    }}
                  >
                    <option selected="selected">Marina</option>
                    <option>Vegetal</option>
                    <option>Frutas</option>
                    <option>Mediterránea </option>
                  </select>
                </div>

              </div>

              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Unidad de Medida
                </label>
                <div className="col-sm-4">
                  <select
                    className="form-control"
                    id="unidad"
                    onChange={(event) => {
                      setUnidadBuffet(event.target.value);
                    }}
                    onClick={(event) => {
                      setUnidadBuffet(event.target.value);
                    }}
                  >

                  </select>
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
  );
}
export default AgregarBuffet;
