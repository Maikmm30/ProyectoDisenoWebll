import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AgregarPaises() {

  const [codigoPais, setCodigoPais] = useState("");
  const [numeroPais, setNumeroPais] = useState("");
  const [nombrePais, setNombrePais] = useState("");

  //Manejar imagen
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/paises/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroPais(num);
      const str = "P";
      setCodigoPais(str + num);
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/paises/agregar", {
      codigoPais: codigoPais,
      nombrePais: nombrePais,
      estadoPais: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '16',
        consecutivoNuevo: numeroPais,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/paises'
  };
  const limpiaCajas = () => {
    setCodigoPais("")
    setNombrePais("")
  }

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
      <div className="row bg-warning" style={{ height: "650px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Países</h3>
          <i className="fas fa-globe-americas fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 bg-success h-35">
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <button className=" p-3 bg-light rounded-circle fas fa-broom fa-3x" onClick={limpiaCajas}></button>
                </div>
                <div className="col ">
                  <button className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></button>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-images fa-3x"></i>
                </div>
              </div>
            </div>

            <h4>Información de los Países</h4>
            <form onSubmit={enviarDatos}>
              <div className="row mt-2 mb-3">
                <label className="col-sm-3">Código del País</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" value={codigoPais} disabled />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3">
                  Nombre del País
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" onChange={(event) => {
                    setNombrePais(event.target.value);
                  }} value={nombrePais} />
                </div>
              </div>
              <div className=" row mt-2 mb-3">
                <label for="staticEmail" className="col-sm-3 me-3">
                  Bandera del País
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
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarPaises;
