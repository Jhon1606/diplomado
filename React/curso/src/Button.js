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
};

Button.defaultProps = {
    name: 'Usuario'
}; // Sirve para ponerle un valor por defecto a el props
