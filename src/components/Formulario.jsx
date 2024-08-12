import Error from "./Error";
import { useEffect, useState } from "react";

const Formulario = ({
  setEstudiantes,
  estudiantes,
  estudiante,
  setEstudiante,
}) => {
  // setDocumento modifica el valor de la propiedad (docuemnto)
  const [documento, setDocumento] = useState(" ");
  const [nombre, setNombre] = useState(" ");
  const [apellido, setApellido] = useState(" ");
  const [telefono, setTelefono] = useState(" ");
  const [correo, setCorreo] = useState(" ");
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    // validar campos
    // if ([documento, nombre, apellido, correo, telefono].includes("")) {
    //   setError(true);
    //   return;
    // } else setError(false);


     // Validar campos: no permitir espacios en blanco y asegurarse de que todos los campos estén completos
     if ([documento, nombre, apellido, correo, telefono].some(field => !field.trim())) {
      setError("Todos los campos son obligatorios y no deben estar vacíos.");
      return;
    } else {
      setError("");
    }




    //Guardando recoger los datos del formulario
    const obj = { documento, nombre, apellido, correo, telefono };
    //if de edicion  hay un id
    if (estudiante.id) {
      obj.id = estudiante.id;
      //retornar el obj con la infromacion nueva de edicon
      const otros = estudiantes.map((est) =>
        est.id === estudiante.id ? obj : est
      );
      setEstudiantes(otros);
    } else {
      //si no hay un id le agrega al la lista de estudiantes existente

      obj.id = getId();
      setEstudiantes([...estudiantes, obj]);
    }

    limpiarCampos();
  };

  const getId = () => {
    let id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return id;
  };

  const limpiarCampos = () => {
    setDocumento("");
    setNombre("");
    setApellido("");
    setTelefono("");
    setCorreo("");
    setError(false);
    setEstudiante({});
  };

  useEffect(() => {
    if (estudiante.id && estudiante.id !== "") {
      setDocumento(estudiante.documento);
      setNombre(estudiante.nombre);
      setApellido(estudiante.apellido);
      setCorreo(estudiante.correo);
      setTelefono(estudiante.telefono);
    }
  }, [estudiante]);

  return (
    <div className="col-md-5 mt-2">
      <form onSubmit={enviarFormulario}>
        <div className="card table-widget">
          <div className="bg-body-secondary card-title text-center">Formulario</div>
          {error && (
            <Error otra="mas props" mensaje="Los campos son obligatorios" />
          )}

          <div className="card-body">

            <div className=" text-field  mb-3 impu">
              <span className="text-start" id="basic-addon1">
                Documento
              </span>
              <input
                type="number"
                className="form-control"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </div>

            <div className="text-field mb-3">
              <span className="text-start" id="basic-addon1">
                Nombre
              </span>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="text-field mb-3">
              <span className="text-start" id="basic-addon1">
                Apellido
              </span>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div className="text-field mb-3">
              <span className="text-start" id="basic-addon1">
                Teléfono
              </span>
              <input
                type="tel"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="text-field mb-3">
              <span className="text-start" id="basic-addon1">
                Correo
              </span>
              <input
                type="email"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

           
            <div className="d-flex justify-content-center d-grid">
              <div className="d-grid gap-2 d-md-block">
              <button type="submit" className="btn btn-success me-5">{estudiante.id ? "Editar" : "Registrar"}</button>
              <input
                onClick={limpiarCampos}
                value="Cancelar"
                type="button"
                className="btn btn-info my-2"
              />
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};
export default Formulario;
