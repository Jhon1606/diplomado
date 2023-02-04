import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Hola, Saludo } from "./Hola";
import Product, {UserCard} from "./Product";
import {Button} from "./Button";
import TaskCard from './Task';
import {Posts} from './Posts';
import Prueba from './Prueba';
import Arreglos from './Arreglos';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
    console.log('Valor del input:' + e.target.value)
    console.log('id del input' + e.target.id)
}

// Importamos el archivo Hola (La que exportamos en ésa misma) Y le decimos que traiga la funcion Hola que es la que se encuentra dentro de los corchetes {}

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

root.render(
    <>
        {/* <Hola/>
        <Saludo/>
        <Product/> */}
        {/* <Product message="Hola Jhon" />
        <Product message="Hola React" />
        <Product message="Ultimo msj" /> */}

        {/* <Button text="Haz clic aqui"/>
        <Button text="Click me" name="Jhon"/>
        <Button text="boton"/> */}

        {/* <UserCard 
            name="Jhon Barros"
            amount={3000}
            married={true}
            points={[99,33.8,22.2]} // Se pone [] porque points vendria siendo un arreglo
            address={{
                street: "123 Main Street",
                city: "New York"
            }} //Se pone {} Porque address vendria siendo un objeto
        /> */}

        {/* <TaskCard ready={true}/>
        <input id="hola" onChange={function (e){ //e.target.id para mostrar el id en consola. e significa event
            console.log(e.target.value + '...');
        }} />
        <input id="hola" onChange={(e) => { //Otra manera de hacerlo definiendo la función de una manera dsitinta
            console.log(e.target.value + '...');
        }} />
        <input id="hola" onChange={handleChange} />
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('enviado');
         }}> 
            <h1>Registro de usuario</h1>
            <button>Send</button>
        </form> */}

        <Posts/>
        <Prueba/>
        <Arreglos/>

    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
