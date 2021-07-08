
function AgregarBuffet() {
  return (
    <div className="container">
      <div className="row " style={{ height: "600px" , backgroundColor: "#FF723F"}}>
        <div className="col-3 m-auto text-center pb-5">
          <h3>Agregar Buffet</h3>
          <i className="fas fa-utensils fa-10x text-light"></i>
        </div>
        <div className="col-9">
          <div className="row h-75">
            <div className="text-center col-12  h-25"  style={{  backgroundColor: "#C42709"}}>
              <div className="row row-cols-4 m-4  text-light">
                <div className="col"><i className="p-3 ght rounded-circle fas fa-broom fa-3x "></i></div>
                <div className="col"><i className="p-3 ght rounded-circle  fas fa-check-circle fa-3x"></i></div>
                <div className="col"><i className="py-3 px-4 ght rounded-circle fas fa-times fa-3x"></i></div>
                <div className="col"><i className="fas fa-search fa-4x"></i></div>

              </div>
            </div>
            <div className="col-12 h-80">
              Información de la comida tipo Buffet
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Código
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control"
                    readonly="readonly"
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Precio
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Tipo
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option selected="selected">Marina</option>
                    <option>Vegetal</option>
                    <option>Frutas</option>
                    <option>Mediterránea </option>
                  </select>
                </div>

              </div>

              <div className="form-group row mt-2">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Unidad de Medida
                </label>
                <div className="col-sm-4">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>Unidades de capacidad</option>
                    <option>Unidades de densidad</option>
                    <option>Unidades de energia</option>
                    <option>Unidades de fuerza</option>
                    <option>Unidades de longitud</option>
                    <option>Unidades de masa</option>
                    <option>Unidades de peso específico</option>
                    <option>Unidades de superficie</option>
                    <option>Unidades de temperatura</option>
                    <option>Unidades de tiempo</option>
                    <option>Unidades de velocidad</option>
                    <option>Unidades de viscosidad</option>
                    <option>Unidades de volumen</option>
                    <option>Unidades eléctricas</option>
                    <option>Unidades de potencia</option>
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
export default AgregarBuffet;
