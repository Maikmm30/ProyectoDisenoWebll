import React from "react";

function Login() {
    return (

        
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Ingresar al Sistema</h5>
                <form className="form-signin">
                  <div className="form-label-group m-5">
                  <label for="">Usuario</label>
                    <input type="usuario" id="" className="form-control" placeholder="Ingresar usuario" required autofocus/>
                   
                  </div>
    
                  <div className="form-label-group m-5">
                  <label for="">Contraseña</label>
                    <input type="password" id="" className="form-control" placeholder="Ingresar contraseña" required/>
                  </div>
                  <div className="m-5 text-center">
                  <button className="m-2 rounded border-0 bg-warning"><i className="fas fa-broom fa-2x "></i></button>
                    <button className="m-2 rounded border-0 bg-warning"><i className="fas fa-check-circle fa-2x"></i></button>
                    <button className="m-2 rounded border-0 bg-warning"><i className="fas fa-times-circle fa-2x"></i></button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
}

export default Login;