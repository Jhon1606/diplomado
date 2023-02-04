import React, {useState} from 'react'

const Prueba = () => {
    const [contador, setContador] = useState(0)
  return (
    <div>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1)
        }}> Sumar </button>
    </div>
  )
}

export default Prueba