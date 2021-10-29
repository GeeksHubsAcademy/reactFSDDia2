
import React from 'react';
import BotonHobbies from '../../Components/BotonHobbies/BotonHobbies';

import './Users.css';

const Users = () => {

    let alumno1 = {
        nombre: "Rafa",
        apellidos: "Giner Gomez",
        Hobbies: {
            hobbie1: "Videojuegos",
            hobbie2: "Formula1"
        }
    }

    let alumno2 = {
        nombre: "Alfonso",
        apellidos: "Lara Barberá",
        Hobbies: {
            hobbie1: "Videojuegos",
            hobbie2: "Escalar"
        }
    }

    let alumno3 = {
        nombre: "George",
        apellidos: "Zamfir",
        Hobbies: {
            hobbie1: "Ciclismo",
            hobbie2: "Comics"
        }
    }

    const alumnos = [alumno1, alumno2, alumno3];

    const meHasClickado = (parametro) => {
        console.log(parametro);
    }

    return (
        <div className="vistaUsers">
            {alumnos.map((alumno) =>
                <div className="cardAlumno" onClick={() => meHasClickado(alumno)} key={alumno.nombre + "A"}>
                    <div className="datosAlumno">{alumno.nombre}</div>
                    <div className="datosAlumno">{alumno.apellidos}</div>
                    <BotonHobbies hobbie1={alumno.Hobbies.hobbie1} hobbie2={alumno.Hobbies.hobbie2}/>
                </div>)}
        </div>
    )
}

export default Users;