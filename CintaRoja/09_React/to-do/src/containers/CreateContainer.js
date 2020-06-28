import React from 'react';
import TaskForm from '../components/TaskForm';

const CreateContainer = () => {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <h1 className="text-center">Crear tarea</h1>
                    <TaskForm />
                </div>
            </div>
        </div>
    )
}

export default CreateContainer
