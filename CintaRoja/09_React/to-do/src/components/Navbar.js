import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand mb-0 h1">Tareas</Link>
                <Link to="/create-task">
                    <button type="button" className="btn btn-warning">Crear Tarea</button>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
