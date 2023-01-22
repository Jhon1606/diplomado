export default function Product(props){
    console.log(props);
    return <p>{props.message}</p>
}

// La diferencia del export y el export default es que el default trae toda las funciones del archivo, mientras que el export solo uno tiene que llamar cada función y ponerla dentro de los corchetes para poder utilizarlas{}