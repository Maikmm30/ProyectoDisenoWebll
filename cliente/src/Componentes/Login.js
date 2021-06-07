import React from "react";

function Login() {
    return (

            <div class="container">

                    <h3>Iniciar Sesion</h3>

                    <div className="form-group">
                        <label>Correo Electronico</label>
                        <input type="email" className="form-control" placeholder="Ingresa el Correo Electronico" size="50" />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa la contraseña" size="50" />
                    </div>

                    {/* Se agregan los botones de limpiar,aceptar y cancelar */}
                    <button type="submit"><i class="fas fa-broom fa-2x"></i></button>
                    <button type="submit"><i class="fas fa-check-circle fa-2x"></i></button>
                    <button type="submit"><i class="fas fa-times-circle fa-2x"></i></button>

            </div>
        );
}

export default Login;