import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarProveedores() {

  const [codigoProveedor, setCodigoProveedor] = useState("");
  const [numeroProveedor, setNumeroProveedor] = useState("");
  const [cedulaProveedor, setCedulaProveedor] = useState("");
  const [fechaProveedor, setFechaProveedor] = useState("");
  const [nombreProveedor, setNombreProveedor] = useState("");
  const [primerApellidoProveedor, setPrimerApellidoProveedor] = useState("");
  const [segundoApellidoProveedor, setSegundoApellidoProveedor] = useState("");
  const [direccionProveedor, setDireccionProveedor] = useState("");
  const [telefonoOficinaProveedor, setTelefonoOficinaProveedor] = useState("");
  const [faxProveedor, setFaxProveedor] = useState("");
  const [celularProveedor, setCelularProveedor] = useState("");

  //Manejar imagen
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/Proveedores/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroProveedor(num);
      const str = "PRO";
      setCodigoProveedor(str + num);
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/Proveedores/agregar", {
      codigoProveedor: codigoProveedor,
      cedulaProveedor: cedulaProveedor,
      fechaProveedor: fechaProveedor,
      nombreProveedor: nombreProveedor,
      primerApellidoProveedor: primerApellidoProveedor,
      segundoApellidoProveedor: segundoApellidoProveedor,
      direccionProveedor: direccionProveedor,
      telefonoOficinaProveedor: telefonoOficinaProveedor,
      faxProveedor: faxProveedor,
      celularProveedor: celularProveedor,
      estadoLimpieza: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar", {

      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoProveedor + ': ' + getCookie('usuario') + ' agregó un proveedor',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '14',
        consecutivoNuevo: numeroProveedor,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/Proveedores/'
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
      <div className="row bg-warning" style={{ height: "1100px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Proveedores</h3>
          <i className="fas fa-user-friends fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row ">
            <div className="text-center col-12 bg-success h-25">
              <div className="row row-cols-4 m-4">
                <div className="col">
                  <i className=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div className="col ">
                  <i className="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i>
                </div>
                <div className="col">
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
                <div className="col">
                  <i className="py-3 px-4 bg-light rounded-circle fas fa-images fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="col-8 bg-danger">
              <div>
                <form>
                  <div className="mt-2 mb-3 row">
                    <h4 className="my-4">Información del Proveedor</h4>
                    <label className="col-sm-3">Código </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" value={codigoProveedor} disabled />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Cédula de identidad</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" onChange={(event) => {
                        setCedulaProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Fecha de Ingreso</label>
                    <div className="col-sm-9">
                      <input type="date" name="" id="" onChange={(event) => {
                        setFechaProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="mt-2  mb-3 row">
                    <label className="col-sm-3">Nombre del Proveedor</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" onChange={(event) => {
                        setNombreProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Primer apellido</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" onChange={(event) => {
                        setPrimerApellidoProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Segundo apellido</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" onChange={(event) => {
                        setSegundoApellidoProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="mt-2 mb-3 row">
                    <label className="col-sm-3">Dirección</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" onChange={(event) => {
                        setDireccionProveedor(event.target.value);
                      }} />
                    </div>
                  </div>

                  <div className="row my-3">
                    <h5>Teléfonos</h5>
                    <div className="col-sm-4">
                      <label>Oficina</label>
                      <input type="text" className="form-control" onChange={(event) => {
                        setTelefonoOficinaProveedor(event.target.value);
                      }} />
                    </div>

                    <div className="col-sm-4">
                      <label>Fax</label>
                      <input type="text" className="form-control" onChange={(event) => {
                        setFaxProveedor(event.target.value);
                      }} />
                    </div>

                    <div className="col-sm-4">
                      <label>Celular</label>
                      <input type="text" className="form-control" onChange={(event) => {
                        setCelularProveedor(event.target.value);
                      }} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-4 bg-info p-0 ">
              <h4 className="m-4">Foto del Proveedor</h4>
              <div className="col-sm-4 border border-danger m-auto " style={{ height: "350px", width: "260px" }}>
                {previewSource && (
                  <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '348px', width: '258px' }}
                  />)}


              </div>
              <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState}
                className="form-input" /> 
            </div>

            <div className="bg-success pb-3 text-center">
              <h4 className="m-4">Pase de productos</h4>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <label>Productos del restaurante</label>

                    <textarea name="" id="" cols="43" rows="10"></textarea>
                  </div>
                  <div className="col">
                    <i class="fas fa-arrow-circle-left fa-3x m-3"></i>
                    <i class="fas fa-arrow-circle-right fa-3x"></i>
                  </div>
                  <div class="col">
                    <label>Productos manejados por el Proveedor</label>

                    <textarea name="" id="" cols="43" rows="10"></textarea>
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

export default AgregarProveedores;
