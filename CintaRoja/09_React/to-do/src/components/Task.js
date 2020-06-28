// Componente que me muestra mi tarea
import React from "react";
import axios from "axios";

const Task = (props) => {

    const DELETE = `https://${process.env.REACT_APP_FIREBASE}.firebaseio.com/task/`;
    const ENDPOINT = `https://${process.env.REACT_APP_FIREBASE}.firebaseio.com/task.json`;

    const deleteTask = (id) => {
        axios.delete(`${DELETE}${id}.json`)
            .then(() => props.getTasks())
            .catch((error) => alert("Error al eliminar tarea: " + error));
    }

    const updateTask = (bool) => {
        const body = {
            [props.id]: {
                title: props.title,
                priority: props.priority,
                time: props.time,
                done: bool
            }
        }
        axios.patch(ENDPOINT, body)
        .then(() => {props.getTasks()}, alert("Tarea actualizada"))
        .catch((error) => alert("Ocurrió un error " + error));
    }

    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>
                Prioridad: {props.priority}
            </p>
            <small>
                Time: {props.time}
            </small>
            <p>{props.done}</p>
            <button type="button" className="btn btn-danger" onClick={() => deleteTask(props.id)}>Eliminar</button>
            {props.done
                ? <button type="button" className="btn btn-info" onClick={() => updateTask(false)} >Deshacer</button>
                : <button type="button" className="btn btn-success" onClick={() => updateTask(true)} >Completar</button>
            }
        </div>
    )
}

export default Task;
