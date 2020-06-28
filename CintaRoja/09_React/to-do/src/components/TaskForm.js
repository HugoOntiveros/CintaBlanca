import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

// Change all class for className
// Change all for for htmlFor
// Close all single line tags

const TaskForm = () => {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [time, setTime] = useState("");
    const ENDPOINT = `https://${process.env.REACT_APP_FIREBASE}.firebaseio.com/task.json`;
    //Esto nos permitirá navegar sin refrescar el navegador
    const history = useHistory();

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handlePriority = (event) => {
        setPriority(event.target.value);
    }
    const handleTime = (event) => {
        setTime(event.target.value);
    }

    const createTask = () => {
        const body = {
            title: title,
            done: false,
            time: time,
            priority: priority
        }

        axios.post(ENDPOINT, body)
            .then(() => history.push("/"))
            .catch((error) => alert("Ocurrió un error " + error));
    }

    return (
        <div className="container" >
            <div className="form-group">
                <label htmlFor="title">Nombre de la tarea</label>
                <input onChange={handleTitle} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
                <label htmlFor="priority">Prioridad</label>
                <select onChange={handlePriority} className="form-control" id="priority">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="time">Tiempo</label>
                <input onChange={handleTime} type="number" className="form-control" id="time" min="0" />
            </div>
            <button className="btn btn-success" onClick={() => createTask()} >Crear</button>
        </div >
    )
}

export default TaskForm
