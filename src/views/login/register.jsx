import React, { useState } from 'react'
import Style from "../../css/register.module.css"

const Register = () => {

    const initialData = {
        nombres: "",
        apellidos: "",
        correo: "",
        contraseña: "",
    };

    const [register, setRegister] = useState(initialData)

    const onChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
      }

    return (
        <div>

        </div>
    )
}

export default Register