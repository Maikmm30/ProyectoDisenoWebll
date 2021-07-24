import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function AgregarUsuarios() {

  const [codigoUsuario, setCodigoUsuario] = useState("");
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [primerApellidoUsuario, setPrimerApellidoUsuario] = useState("");
  const [segundoApellidoUsuario, setSegundoApellidoUsuario] = useState("");
  const [telefono1Usuario, setTelefono1Usuario] = useState("");
  const [telefono2Usuario, setTelefono2Usuario] = useState("");
  const [username, setUsername] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [rolUsuario, setRolUsuario ] = useState("");

    
  useEffect(() => {
    Axios.get("http://localhost:3001/usuario/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo) + 1;
      setNumeroUsuario(num);

      const str = "U";
      setCodigoUsuario(str + num);
  
    });
  
  }, []);

    
  const enviarDatos = () => {
    Axios.post("http://localhost:3001/usuario/agregar",{
      codigoUsuario: codigoUsuario,
      numeroUsuario: numeroUsuario,
      nombreUsuario: nombreUsuario,
      primerApellidoUsuario: primerApellidoUsuario,
      segundoApellidoUsuario: segundoApellidoUsuario,
      telefono1Usuario: telefono1Usuario,
      telefono2Usuario: telefono2Usuario,
      username: username,
      passwordUsuario: passwordUsuario,
      rolUsuario: rolUsuario,
      estadoUsuario: true,
    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '10',
        consecutivoNuevo: numeroUsuario,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/usuarios'
  };

  return (
    <div className="container">
      <div className="row bg-warning" style={{ height: "650px" }}>
        <div className="col-3 m-auto text-center pb-5">
          <h3 className="mb-4 text-center">Usuarios</h3> 
          <i className="fas fa-user-plus fa-10x"></i>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="text-center mb-3 col-12 bg-success h-35">
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
                  <i className=" py-3 px-4 bg-light rounded-circle fas fa-key fa-3x"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>  Datos personales del usuario</h4>
                <div className=" row mt-4 mb-3">
                  <label className="col-sm-3 ">Código</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" value={codigoUsuario} disabled/>
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  <label className="col-sm-3">Nombre</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" 
                    onChange={(event)=>{
                      setNombreUsuario(event.target.value);
                    }}/>
                  </div>
                </div>
                <div className=" row mt-2 mb-2">
                  <label for="staticEmail" className="col-sm-3">
                    Primer Apellido
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control"
                    onChange={(event)=>{
                      setPrimerApellidoUsuario(event.target.value);
                    }} />
                  </div>
                </div>
                <div className=" row mt-2 mb-2">
                <label for="staticEmail" className="col-sm-3">
                  Segundo Apellido
                </label>
                <div className="col-sm-8">
                  <input type="text" className="form-control"
                  onChange={(event)=>{
                    setSegundoApellidoUsuario(event.target.value);
                  }} />
                </div>
              </div>
                <div className="row mt-2 mb-2">
                  <label for="staticEmail" className="col-sm-3">
                    Teléfono N°1
                  </label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control"
                    onChange={(event)=>{
                      setTelefono1Usuario(event.target.value);
                    }} />
                  </div>
                </div>
                <div className="row mt-1 mb-3">
                  <label for="staticEmail" className="col-sm-3">
                    Teléfono N°2
                  </label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" 
                    onChange={(event)=>{
                      setTelefono2Usuario(event.target.value);
                    }}/>
                  </div>
                </div>
              </div>
              <div className="col">
                <h4> Datos tecnicos de usuarios	</h4>
                <div className=" row mt-4 mb-2">
                  <label className="col-sm-3">Login</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control"
                    onChange={(event)=>{
                      setUsername(event.target.value);
                    }} />
                  </div>
                </div>
                <div className="row mt-3 mb-2">
                  <label className="col-sm-3 ">Contraseña</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" 
                    onChange={(event)=>{
                      setPasswordUsuario(event.target.value);
                    }}/>
                  </div>
                </div>
             
              <h4 className='mt-3'>Privilegios</h4>
              <div className="row mt-2">
              
                <div className="col">
                <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(event)=>{
                  setRolUsuario(event.target.value);
                }} >
                <option>Administrador del Sistema</option>
                <option>Administrador de Seguridad</option>
                <option>Administrador del Restaurante</option>
                <option>Administrador de Cuentas</option>
              </select>
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
export default AgregarUsuarios;
