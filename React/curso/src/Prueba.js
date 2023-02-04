import React, {useState, useEffect} from 'react'

const Prueba = () => {
    const [contador, setContador] = useState(0)
    const [palabra, setPalabra] = useState('')

  useEffect(() => {
    console.log('render')
  },[contador]) //Aqui dice que se va a ejecutar lo que esta dentro de useEffect siempre y cuando el valor de contador cambie

  return (
    <div>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1)
        }}> Sumar </button>

        <input onChange={(e) => {setPalabra(e.target.value)}} />
        <button onClick={() => {
          alert ('La palabra es: ' + palabra)
        }}>Ver palabra</button>
    </div>
  )
}

export default Prueba