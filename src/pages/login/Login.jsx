import React, { useState } from 'react';
import lock from '../../icon/Login/password.png';
import mail from '../../icon/Login/email.png';
import '../../css/login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [body, setBody] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const change = (event) => {
    console.log(event.target.value)
    setBody({
      ...body,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = () => {
    navigate('/home');
    console.log(body)
  }

  return (
    <body className='body'>
      <div className="login">
        <div className="contenedor-login">
          <div className="title">
            <p className="center letter">¡Ingresa a tu cuenta!</p>
          </div>
          <form className="login">
            <div className="div">
              <img
                className='mailler'
                src={mail}
                alt='' />
              <input type="text" name='email' value={body.email} onChange={change} placeholder='Correo' className="mail" />
            </div>
            <div className="div">
              <img
                className='lock'
                src={lock}
                alt='' />
              <input type="password" name='password' value={body.password} onChange={change} placeholder='Contraseña' className="pass" />
            </div>
            <p></p>
            <button onClick={() => onSubmit()} type="submit" name="enviar" className="buton">INGRESAR</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login