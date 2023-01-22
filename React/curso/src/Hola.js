export function Hola() {
  // Para poder utilizar esta funcion en el archivo index.js necesito escribir export antes de la función para poder exportar el archivo

  const casado = false; //Se hace la prueba cambiando la constante en true y false, si es true muestra "Estoy casado" y si es false mostrará "No estoy casado"

  return <h1> {casado ? "Estoy casado" : "No estoy casado"}</h1>;

  // El ? significa que si el valor casado es verdadero imprima "Estoy casado" mientras que si no es verdadero imprima "No estoy casado"
}

export function Saludo() {
  return <h1>Hola mundo</h1>;
}
