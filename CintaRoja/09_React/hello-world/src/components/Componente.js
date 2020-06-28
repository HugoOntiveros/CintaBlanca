// rfac = React Functional Arrow Component export
import React, { useState } from 'react'

const Componente = (props) => {
    //     Estado    Setter
    const [school, setSchool] = useState("Dev.f");
    return (
        <div>
            <h1>Nombre: {props.name} </h1>
            <h3>Programa: {props.program} </h3>
            <p>Batch: {props.batch} </p>
            <small>{school}</small>
            <button onClick={() => setSchool("A darle")}>Acción</button>
        </div>
    )
}

export default Componente
