import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Hola, Saludo } from "./Hola";
// import Product, {UserCard} from "./Product";
// import {Button} from "./Button";
import TaskCard from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// Importamos el archivo Hola (La que exportamos en ésa misma) Y le decimos que traiga la funcion Hola que es la que se encuentra dentro de los corchetes {}

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

        <TaskCard/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
