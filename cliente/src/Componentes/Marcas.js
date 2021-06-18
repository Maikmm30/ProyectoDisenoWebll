import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Marcas() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "800px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3>Marcas</h3>
          <i class="far fa-copyright fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row h-75">
            <div class="text-center col-12 bg-success h-25">
                <div class="row row-cols-3 m-4">
                  <div class="col"><i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i></div>
                  <div class="col "><i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i></div>
                  <div class="col"><i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i></div>

              </div>
            </div>
            <div class="col-6 bg-danger h-100">
            Información de la Marca
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Código
                </label>
                <div class="col-sm-8">
                      <input
                        type="number"
                        class="form-control"
                        readonly="readonly"
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
                        placeholder="Nombre Marca"
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
                        id="exampleFormControlSelect1"
                      >
                        <option>Nacionalidad 1</option>
                        <option>Nacionalidad 2</option>
                        <option>Nacionalidad 3</option>
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
                        placeholder="Descripcion"
                        rows="3"
                      />
                </div>
                <div class="form-group row mt-2">
                <div class="col-sm-6">
                    <Form class="">
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Foto de la Marca" />
                        </Form.Group>
                    </Form>
                    
                </div>
            
                
              </div>
              </div>
            </div>
            <div class="col-6 bg-primary p-0 border border-danger">
              
            Información del Contacto
              <div class="form-group row mt-4">
                <label for="staticEmail" class="col-sm-3 col-form-label">
                  Cédula Jurídica
                </label>
                <div class="col-sm-8">
                      <input
                        type="number"
                        class="form-control"
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
                        placeholder="Nombre Artículo"
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
                        placeholder="Descripcion"
                        rows="3"
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
                        placeholder="Nombre Artículo"
                      />
              </div>
                <div class="form-group row mt-2">
                <div class="col-sm-6">
                    <Form class="">
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Foto de la Marca" />
                        </Form.Group>
                    </Form>
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