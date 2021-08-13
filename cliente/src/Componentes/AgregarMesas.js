import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import getCookie from './utils/Cookies';

function AgregarMesas() {

  const [codigoMesa, setCodigoMesa] = useState("");
  const [numMesa, setNumMesa] = useState("");
  const [nombreMesa, setNombreMesa] = useState("");
  const [cantidadSillasMesa, setCantidadSillasMesa] = useState("");
  const [restauranteMesa, setRestauranteMesa] = useState("");
  const [numeroMesa, setNumeroMesa] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/mesas/id").then((res) => {
      const num = parseInt(res.data[0].valorConsecutivo)+1;
      setNumMesa(num);
      const str = "ME";
      setCodigoMesa(str+num);
      Axios.get("http://localhost:3001/restaurantes/names").then((res) => {
              console.log('data'+res.data)
              console.log(res.data[1]);
              var array = [];
              var primerValor = true;
              for(var k in res.data) {
                if (primerValor === true){
                  setRestauranteMesa(res.data[k].nombre);
                  primerValor = false;
                }
                console.log(array.push(res.data[k].nombre));
             }
             for(var i in array)
             { 
                 document.getElementById("restaurante").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
 
             }
            });  
    });
  }, []);

  const enviarDatos = () => {
    Axios.post("http://localhost:3001/mesas/agregar",{
      codigoMesa: codigoMesa,
      nombreMesa: nombreMesa,
      cantidadSillasMesa: cantidadSillasMesa,
      restauranteMesa: restauranteMesa,
      numeroMesa: numeroMesa,
      estadoMesa: true,
    });
    Axios.post("http://localhost:3001/bitacora/agregar",{
      
      usuarioBitacora: getCookie('usuario'),
      rolBitacora: getCookie('rol'),
      descripcionBitacora: codigoMesa+': '+getCookie('usuario')+' agregó una mesa',

    });
    Axios.put("http://localhost:3001/consecutivos/update",
      {
        codigoActualiza: '7',
        consecutivoNuevo: numMesa,
        columnaSeleccionada: 'valorConsecutivo'
      });
    window.location.href = 'http://localhost:3000/mesas/'
  };
  return (
<div class="container">
      <div class="row" style={{ height: "600px" , backgroundColor: "#FF723F"  }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Mesas</h3>
          <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik01MDUuOTQ3LDEyMy41OTdjLTQuMzUzLTQuNzUyLTEwLjU0Ni03LjQ3Ny0xNi45OS03LjQ3N2gtNi44MzdjLTE3LjkyOSwwLTMyLjYzMSwxMy40NjgtMzQuMTk4LDMxLjMyOGwtNy4zOTcsODQuMjc5DQoJCQkJYy0wLjY1NSw3LjQ2OS02LjgwNCwxMy4xMDItMTQuMzAzLDEzLjEwMmgtNjQuMDI2Yy0yMC41MTYsMC0zNy4yMDcsMTYuNjkxLTM3LjIwNywzNy4yMDd2My42OTcNCgkJCQljMCwxMi4zOTUsMTAuMDgzLDIyLjQ3OCwyMi40NzgsMjIuNDc4aDEzLjcyM2wtMTMuNTE0LDQ0LjEzNWMtMC4wMSwwLjAzMy0wLjAyLDAuMDY2LTAuMDMsMC4wOTlsLTEwLjMzLDMzLjczNg0KCQkJCWMtMS4yMTMsMy45NjEsMS4wMTUsOC4xNTQsNC45NzUsOS4zNjdjMC43MzIsMC4yMjQsMS40NzIsMC4zMzEsMi4xOTksMC4zMzFjMy4yMDksMCw2LjE4LTIuMDc3LDcuMTY4LTUuMzA2bDguNzEyLTI4LjQ1MUg0NjMuMjQNCgkJCQlsOC43MTIsMjguNDUxYzAuOTg4LDMuMjI5LDMuOTU4LDUuMzA2LDcuMTY4LDUuMzA2YzAuNzI4LDAsMS40NjgtMC4xMDcsMi4xOTktMC4zMzFjMy45Ni0xLjIxMyw2LjE4OC01LjQwNyw0Ljk3NS05LjM2Nw0KCQkJCWwtMjQuNTE3LTgwLjA2NmM0LjMwNS0xLjIxOSw4LjQ2Mi0yLjk1MywxMi4zNjItNS4xODhjMy41OTMtMi4wNiw0LjgzNi02LjY0MywyLjc3Ni0xMC4yMzYNCgkJCQljLTIuMDYtMy41OTMtNi42NDQtNC44MzYtMTAuMjM3LTIuNzc2Yy02LjA0NCwzLjQ2NS0xMi45MzksNS4yOTctMTkuOTQsNS4yOTdoLTc1LjQwMmMtMC4wMjUsMC0wLjA1LDAtMC4wNzQsMGgtMjMuNzkzDQoJCQkJYy00LjEyMywwLTcuNDc4LTMuMzU0LTcuNDc4LTcuNDc4di0zLjY5N2MwLTEyLjI0NSw5Ljk2Mi0yMi4yMDcsMjIuMjA3LTIyLjIwN2g2NC4wMjZjMTUuMzMzLDAsMjcuOTA2LTExLjUxOCwyOS4yNDYtMjYuNzkxDQoJCQkJbDcuMzk2LTg0LjI4YzAuODgyLTEwLjA1Niw5LjE2LTE3LjY0LDE5LjI1NS0xNy42NGg2LjgzN2MyLjI4MiwwLDQuMzg5LDAuOTI3LDUuOTMsMi42MWMxLjU0MiwxLjY4MywyLjI4MiwzLjg2MiwyLjA4Miw2LjEzNg0KCQkJCWwtMTAuMjQyLDExNi43MTFjLTAuMjUyLDIuODc4LTAuODEzLDUuNzI2LTEuNjY2LDguNDY0Yy0xLjIzMiwzLjk1NSwwLjk3Niw4LjE2LDQuOTMxLDkuMzkxYzMuOTYsMS4yMzIsOC4xNTktMC45NzcsOS4zOTItNC45Mw0KCQkJCWMxLjE3MS0zLjc2MiwxLjk0LTcuNjY5LDIuMjg3LTExLjYxNGwxMC4yNDItMTE2LjcxMUM1MTIuNDc0LDEzNC43NTcsNTEwLjMsMTI4LjM0OSw1MDUuOTQ3LDEyMy41OTd6IE0zNzYuODc1LDMwOC4yMTJoNjkuODU1DQoJCQkJbDExLjkxNCwzOC45MWgtOTMuNjg0TDM3Ni44NzUsMzA4LjIxMnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNDkuODAzLDI0NC44M0g4NS43NzdjLTcuNDk5LDAtMTMuNjQ3LTUuNjMyLTE0LjMwMy0xMy4xMDJsLTcuMzk2LTg0LjI3OWMtMS41NjctMTcuODYtMTYuMjY5LTMxLjMyOC0zNC4xOTgtMzEuMzI4DQoJCQkJaC02LjgzN2MtNi40NDQsMC0xMi42MzcsMi43MjUtMTYuOTksNy40NzdjLTQuMzUzLDQuNzUyLTYuNTI3LDExLjE2LTUuOTY1LDE3LjU4MWwxMC4yNDIsMTE2LjcxMQ0KCQkJCWMxLjIwOSwxMy43NzMsNy40ODksMjYuNTAxLDE3LjY4NCwzNS44NDFjNi40MDUsNS44NjgsMTQuMDEsMTAuMDc3LDIyLjIwNiwxMi4zOTdsLTI0LjUxNCw4MC4wNTUNCgkJCQljLTEuMjEzLDMuOTYxLDEuMDE1LDguMTU0LDQuOTc1LDkuMzY3YzAuNzMyLDAuMjI0LDEuNDcyLDAuMzMxLDIuMTk5LDAuMzMxYzMuMjA5LDAsNi4xOC0yLjA3Nyw3LjE2OC01LjMwNmw4LjcxMi0yOC40NTFIMTUxLjYzDQoJCQkJbDguNzEyLDI4LjQ1MWMwLjk4OCwzLjIyOSwzLjk1OCw1LjMwNiw3LjE2OCw1LjMwNmMwLjcyOCwwLDEuNDY4LTAuMTA3LDIuMTk5LTAuMzMxYzMuOTYtMS4yMTMsNi4xODgtNS40MDcsNC45NzUtOS4zNjcNCgkJCQlsLTEwLjMzLTMzLjczNmMtMC4wMS0wLjAzMy0wLjAyLTAuMDY2LTAuMDMtMC4wOTlsLTEzLjUxNC00NC4xMzVoMTMuNzIzYzEyLjM5NSwwLDIyLjQ3Ny0xMC4wODMsMjIuNDc3LTIyLjQ3OHYtMy42OTcNCgkJCQlDMTg3LjAxLDI2MS41MjEsMTcwLjMxOSwyNDQuODMsMTQ5LjgwMywyNDQuODN6IE01My4zNTMsMzQ3LjEyMmwxMS45MTQtMzguOTFoNjkuODU1bDExLjkxNCwzOC45MUg1My4zNTN6IE0xNzIuMDEsMjg1LjczNA0KCQkJCWMwLDQuMTI0LTMuMzU0LDcuNDc4LTcuNDc3LDcuNDc4aC0yMy43ODhjLTAuMDMsMC0wLjA1OSwwLTAuMDg5LDBINjUuMjYzYy0xLjYwNCwwLTMuMTgyLTAuMTAzLTQuNzM2LTAuMjgzDQoJCQkJYy0wLjAwMSwwLTAuMDAzLDAtMC4wMDUsMGMtMTguNzY0LTIuMTY5LTMzLjU1OC0xNy4wNjUtMzUuMjUtMzYuMzUyTDE1LjAzLDEzOS44NjdjLTAuMi0yLjI3NSwwLjU0LTQuNDU0LDIuMDgyLTYuMTM3DQoJCQkJYzEuNTQxLTEuNjgzLDMuNjQ3LTIuNjEsNS45My0yLjYxaDYuODM3YzEwLjA5NSwwLDE4LjM3Myw3LjU4MywxOS4yNTUsMTcuNjRsNy4zOTYsODQuMjc5di0wLjAwMQ0KCQkJCWMxLjM0LDE1LjI3MywxMy45MTMsMjYuNzkxLDI5LjI0NiwyNi43OTFoNjQuMDI2YzEyLjI0NSwwLDIyLjIwNyw5Ljk2MiwyMi4yMDcsMjIuMjA3VjI4NS43MzR6Ii8+DQoJCQk8cGF0aCBkPSJNMzEyLjk0OCwzNzEuMTQxYy0zLjA5NS0xMS44OTctMTMuODQxLTIwLjIwNi0yNi4xMzQtMjAuMjA2aC00LjY0MlYyMTQuNDAxaDkyLjM1NGM1LjMyLDAsMTAuMjk5LTIuMzY1LDEzLjY2MS02LjQ4OA0KCQkJCWMzLjM2Mi00LjEyNCw0LjY3Ny05LjQ3OCwzLjYwNS0xNC42OWMtMy4yMjYtMTUuNjg0LTE3LjE4OC0yNy4wNjctMzMuMTk5LTI3LjA2N0gyMDIuNjY1Yy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41DQoJCQkJczMuMzU3LDcuNSw3LjUsNy41aDE1NS45MjhjOC45MjYsMCwxNi43MDgsNi4zNDYsMTguNTA2LDE1LjA4OGMwLjIxOSwxLjA2NC0wLjI0MywxLjgyOS0wLjUzNywyLjE5MQ0KCQkJCWMtMC4yOTUsMC4zNjEtMC45NTEsMC45NjctMi4wMzYsMC45NjdIMTM3LjQ3MmMtMS4wODUsMC0xLjc0MS0wLjYwNi0yLjAzNi0wLjk2N2MtMC4yOTQtMC4zNjEtMC43NTYtMS4xMjctMC41MzctMi4xOQ0KCQkJCWMxLjc5OC04Ljc0Myw5LjU4LTE1LjA4OSwxOC41MDYtMTUuMDg5aDE0LjA4NGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtMTQuMDg0DQoJCQkJYy0xNi4wMTIsMC0yOS45NzQsMTEuMzgzLTMzLjE5OSwyNy4wNjhjLTEuMDcxLDUuMjEyLDAuMjQzLDEwLjU2NiwzLjYwNSwxNC42ODljMy4zNjIsNC4xMjMsOC4zNDEsNi40ODgsMTMuNjYxLDYuNDg4aDkyLjM1NQ0KCQkJCXYxMzYuNTM1aC00LjY0MmMtMTIuMjkzLDAtMjMuMDM5LDguMzA5LTI2LjEzNCwyMC4yMDVsLTEuNzYxLDYuNzY3Yy0xLjEyNyw0LjMzNS0wLjIwMyw4Ljg1MiwyLjUzNiwxMi4zOTYNCgkJCQljMi43NCwzLjU0Myw2Ljg4LDUuNTc2LDExLjM1OCw1LjU3Nmg4OS42M2M0LjQ3OSwwLDguNjE4LTIuMDMyLDExLjM1OC01LjU3NmMyLjczOS0zLjU0MywzLjY2My04LjA2MSwyLjUzNi0xMi4zOTYNCgkJCQlMMzEyLjk0OCwzNzEuMTQxeiBNMjQ0LjgyNywyMTQuNDAxTDI0NC44MjcsMjE0LjQwMWgyMi4zNDZ2MTM2LjUzNWgtMjIuMzQ2VjIxNC40MDF6IE0yMTIuMDE2LDM4MC44NzlsMS41NTItNS45NjINCgkJCQljMS4zNzUtNS4yODgsNi4xNTItOC45ODEsMTEuNjE2LTguOTgxaDYxLjYyOWM1LjQ2NCwwLDEwLjI0MSwzLjY5MywxMS42MTYsOC45ODFsMS41NTIsNS45NjJIMjEyLjAxNnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              style={{ height: "120px"}}
            />
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 text-light h-25" style={{  backgroundColor: "#C42709"}}>
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3  rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3  rounded-circle  fas fa-check-circle fa-3x" onClick={enviarDatos}></i></div>
                  <div class="col"><i class=" py-3 px-4  rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-9  h-100">
            Información de la Mesa
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        value={codigoMesa} disabled
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
                        placeholder="Nombre"
                        onChange={(event)=>{
                          setNombreMesa(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Numero
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Numero"
                        onChange={(event)=>{
                          setNumeroMesa(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Cantidad de Sillas
                </label>
                <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cantidad de Sillas"
                        onChange={(event)=>{
                          setCantidadSillasMesa(event.target.value);
                        }}
                      />
                    </div>
              </div>
              <div class="form-group row mt-2">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Restaurante
                </label>
                <div class="col-sm-8">
                <select
                        class="form-control"
                        id="restaurante"
                        onChange={(event)=>{
                          setRestauranteMesa(event.target.value);
                        }}
                        onClick={(event)=>{
                          setRestauranteMesa(event.target.value);
                        }}
                      >
                        
                      </select>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarMesas;
