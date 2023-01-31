export const Posts = () => {
    return (
        <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json()) // Esa respuesta lo convierte en archivo json
                .then(data => console.log(data)) // Mostrará por consola los datos obtenidos de la url
                .catch(error => console.error(error)) // Para que muestre el error por consola en caso haya uno
        }}>
            Traer Datos
        </button>
    )
}