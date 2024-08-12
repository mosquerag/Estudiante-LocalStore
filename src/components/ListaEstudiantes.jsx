import Estudiante from "./Estudiante";

const ListaEstudiantes = ({estudiante, estudiantes, borrar, setEstudiante}) => {
    return (
        <div className=" list-st col-md-7 mt-2">

            <div className="table-widget">
                <table className="">
                    <thead>
                        <tr>
                            <th scope="col">Aciones</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes && estudiantes.length?
                            ( 
                                estudiantes.map(est => (

                                    <Estudiante setEstudiante={setEstudiante} borrar={borrar} estudiante={est} key={est.id}/>
                                ))
                            ):
                            (<tr>
                                <th colSpan={5} scope="row">No hay estudiantes</th>
                                </tr>)}

                    </tbody>
                </table>
            </div>


            {/* <div className="card">
                <div className="card-header">
                    Lista de Estduiantes
                </div>
                <div className="card-body">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Docuemnto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes && estudiantes.length?
                            ( 
                                estudiantes.map(est => (

                                    <Estudiante setEstudiante={setEstudiante} borrar={borrar} estudiante={est} key={est.id}/>
                                ))
                            ):
                            (<tr>
                                <th colSpan={5} scope="row">No hay estudiantes</th>
                            </tr>)}

                           
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default ListaEstudiantes;