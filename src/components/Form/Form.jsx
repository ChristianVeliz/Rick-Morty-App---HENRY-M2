import { useState } from "react";
import validation from "../Validaciones/validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    console.log(errors);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
                name="email" 
                type="email" 
                placeholder="ingrese su email" 
                value={userData.email}
                onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
            />
            {errors.password && <p style={{ color: "blue"}}>{errors.password}</p>}
            <hr />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;

