import React from 'react'

const Arreglos = () => {

    const datos = [
        {
            id: 1,
            nombre: 'Jhon',
            apellido: 'Barros',
            edad: 22 
        },
        {
            id: 2,
            nombre: 'Jesus',
            apellido: 'Hernandez',
            edad: 25 
        },
        {
            id: 3,
            nombre: 'Juan',
            apellido: 'Zapata',
            edad: 28 
        }
    ]

    console.log(datos);

    return (
        <div>
            <h1> Arreglos </h1>
            <p> El arreglo tiene lo siguiente: </p>
            {datos.map((dato,i) => { 
                return (
                    <div key={i}>
                        <p> Nombre: {dato.nombre}</p>
                        <p> Apellido: {dato.apellido}</p>
                        <p> Edad : {dato.edad}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Arreglos