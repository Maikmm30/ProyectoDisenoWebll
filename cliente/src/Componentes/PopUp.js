import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {
   Link
  } from "react-router-dom";
class popUp extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Desea cerrar la sesion?',
      message: 'Por favor, confirme',
      buttons: [
        {
          label: 'Sí',
          onClick: (event) => {  window.location.href='/'}
        },
        {
          label: 'No'
        }
      ]
    });
    
  };

  render() {
    return (
      <div className='container' >
        <button className='border-0 bg-transparent' onClick={this.submit}>Reiniciar sesion</button>
      </div>
    );
  }
}
export default popUp;
