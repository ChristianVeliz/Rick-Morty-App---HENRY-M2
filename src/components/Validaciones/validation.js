const validation = (userData) => {
    console.log(userData);
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

    if(!emailRegex.test(userData.email)) errors.email='el email usado no es válido';
    if(userData.email.length === 0) errors.email='debe ingresar el email';
    if(userData.email.length > 35) errors.email = 'el email excede en caracteres';

    if(!passwordRegex.test(userData.password)) errors.password = 'el password debe tener al menos un número y una mayúscula y 8 caracteres como mínimo ';

    return errors;

}

export default validation;

// EMAIL

// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.

// PASSWORD

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
// ¡No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar.