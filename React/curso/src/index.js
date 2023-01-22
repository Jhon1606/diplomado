import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Hola, Saludo } from "./Hola";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Importamos el archivo Hola (La que exportamos en ésa misma) Y le decimos que traiga la funcion Hola que es la que se encuentra dentro de los corchetes {}

root.render(
    <>
        {/* <Hola/>
        <Saludo/>
        <Product/> */}
        <Product message="Hola Jhon" />
        <Product message="Hola React" />
        <Product message="Ultimo msj" />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
