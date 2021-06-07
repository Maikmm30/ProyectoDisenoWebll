function AgregarConsecutivos() {
  return (
    <div class="container">
      <div class="row bg-warning" style={{ height: "650px" }}>
        <div class="col-3 m-auto text-center pb-5">
          <h3 class="mb-4 text-center">Consecutivos</h3>
          <i class="far fa-window-restore fa-10x"></i>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="text-center mb-3 col-12 bg-success h-35">
              <div class="row row-cols-3 m-4">
                <div class="col">
                  <i class=" p-3 bg-light rounded-circle fas fa-broom fa-3x "></i>
                </div>
                <div class="col ">
                  <i class="p-3 bg-light rounded-circle  fas fa-check-circle fa-3x"></i>
                </div>
                <div class="col">
                  <i class=" py-3 px-4 bg-light rounded-circle fas fa-times fa-3x"></i>
                </div>
              </div>
            </div>

            <h4>Información de Consecutivo</h4>
            <div class=" row mt-4 mb-3">
              <label class="col-sm-3 ">Tipo de Consecutivo</label>
              <div class="col-sm-5">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Clientes</option>
                  <option>Personal</option>
                  <option>Proveedores</option>
                  <option>Puestos</option>
                  <option>Eventos o Roles</option>
                  <option>Usuarios</option>
                  <option>Unidades de Medida</option>
                  <option>Países</option>
                  <option>Marcas</option>
                  <option>Comestibles</option>
                  <option>Desechables y Empaques</option>
                  <option>Equipos y Utensilios</option>
                  <option>Limpieza e Higiene</option>
                  <option>Tecnología</option>
                  <option>Restaurantes</option>
                  <option>Buffet</option>
                  <option>Especiales</option>
                  <option>Bebidas Calientes</option>
                  <option>Bebidas Heladas</option>
                  <option>Licores</option>
                  <option>Vinos</option>
                  <option>Empleados</option>
                  <option>Mesas</option>
                  <option>Bitácora</option>
                  <option>Facturas</option>
                </select>
              </div>
            </div>
            <div class="row mt-2 mb-3">
              <label class="col-sm-3">Descripción</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class=" row mt-2 mb-3">
              <label for="staticEmail" class="col-sm-3">
                Valor Consecutivo
              </label>
              <div class="col-sm-5">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row mt-2 mb-3">
              <label for="staticEmail" class="col-sm-3">
                Consecutivo posee Prefijo
              </label>
              <div class="col-sm-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
              </div>
            </div>
            <div class="row mt-1 mb-3">
              <label for="staticEmail" class="col-sm-3">
                Prefijo
              </label>
              <div class="col-sm-5">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgregarConsecutivos;
