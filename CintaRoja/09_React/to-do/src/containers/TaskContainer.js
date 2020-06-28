// Dentro de TaskContainer.js vamos a llamar a nuestras Task.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "../components/Task";

const TaskContainer = () => {

    // Declarar estados y constantes
    const [tasks, setTasks] = useState({});
    const ENDPOINT = `https://${process.env.REACT_APP_FIREBASE}.firebaseio.com/task.json`;

    const getTasks = () => {
        axios.get(ENDPOINT)
            .then((body) => setTasks(body.data))
            .catch((error) => console.log(error));
    }

    // Esto se ejecute al inicio de ciclo de vida del componente, es decir, cuando se monta
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Mis tareas</h1>
                {Object.keys(tasks).map((id) =>
                    <Task
                        key={tasks[id].title}
                        id={id}
                        title={tasks[id].title}
                        priority={tasks[id].priority}
                        time={tasks[id].time}
                        done={tasks[id].done}
                        getTasks={getTasks} />)}
            </div>
        </div>
    )
}

export default TaskContainer;