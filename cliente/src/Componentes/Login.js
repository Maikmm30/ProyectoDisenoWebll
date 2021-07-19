
import Axios from "axios";
import React, { useState } from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function Login() {
  const [usuarioBusca, setUsuario] = useState("")
  const [passBusca, setPass] = useState("")


  const validaUsuario = () => {
    Axios.post("http://localhost:3001/login/", {
      usuarioBusca: usuarioBusca,
      passBusca: passBusca
    }).then((res)=>{
        if(res.data === false){
          displayAlert()
        }
        else{
          window.location.href = 'http://localhost:3000/home'
        }
    });
  };
  
  const displayAlert = () =>{
    toast.dark('Credenciales incorrectas',
     {position: toast.POSITION.TOP_CENTER,
    autoClose: 2500})
  }
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Ingresar al Sistema</h5>
               
                  <div className="form-label-group m-5">
                  <label for="">Usuario</label>
                    <input type="usuario" className="form-control" placeholder="Ingresar usuario" 
                    onChange={(event)=>{setUsuario(event.target.value);}}value={usuarioBusca}/>
                   
                  </div>
    
                  <div className="form-label-group m-5">
                  <label for="">Contraseña</label>
                    <input type="password"className="form-control" placeholder="Ingresar contraseña" 
                    onChange={(event)=>{setPass(event.target.value);}}value={passBusca}/>
                    
                  </div>
                  <div className="m-5 text-center">
                    <button className="m-2 rounded border-0 bg-dark p-1" onClick={validaUsuario}><i className="fas fa-check-circle fa-2x text-light"></i></button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;