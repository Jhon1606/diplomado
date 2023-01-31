import PropTypes from 'prop-types';

export function Button({text,name}){
    console.log(text,name);
    return (
    <button>
        {text} - {name}
    </button>
    )
    
}

Button.propTypes = {
    text: PropTypes.string.isRequired
    /* Sirve para decirle que el props de text debe recibir un string y debe ser requerido, en caso no cumpla con 
    estas condiciones saldrá un error */
};

Button.defaultProps = {
    name: 'Usuario'
}; // Sirve para ponerle un valor por defecto a el props
