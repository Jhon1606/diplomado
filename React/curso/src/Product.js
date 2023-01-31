export default function Product(props){
    console.log(props);
    return <p>{props.message}</p>
}

// La diferencia del export y el export default es que el default trae toda las funciones del archivo, mientras que el export solo uno tiene que llamar cada función y ponerla dentro de los corchetes para poder utilizarlas{}

export function UserCard({name,amount,married,points,address}){
    console.log(name,amount,married,points,address);
    return <>
      <h1>{name}</h1>
        <p>{amount}</p>
        <p>{married ? "Casado" : "No está casado"}</p>
        <p>{points}</p>
        <ul>
            <li>{address.city}</li>
            <li>{address.street}</li>
        </ul>
    </>
  
}