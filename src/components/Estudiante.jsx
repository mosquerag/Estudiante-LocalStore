
export const Estudiante = ({ estudiante, borrar, setEstudiante}) => {

    const {id,documento,nombre,apellido,correo,telefono} = estudiante
    return (
        <tr>
            <td>
                <img src="/src/assets/edit.png"   onClick={() => setEstudiante(estudiante)} />
                <img src="/src/assets/delete.png"  onClick={() => borrar(id)} />
            </td>
            <th scope="row">{documento}</th>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{correo}</td>
            <td>{telefono}</td>
           
        </tr>
    )
}
export default Estudiante;