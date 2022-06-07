import React from 'react';
import lock from '../../icon/Login/password.png';
import mail from '../../icon/Login/email.png';
import '../../css/login.css'

function Login() {
  return (
    <div className="contenedor">
      <div className="title">
        <p className="center letter">¡Ingresa a tu cuenta!</p>
      </div>
      <form className="login">
        <div className="div">
          <img
            className='mailler'
            src={mail}
            alt='' />
          <input type="text" name='email' placeholder='Correo' className="mail" />
        </div>
        <div className="div">
          <img
            className='lock'
            src={lock}
            alt='' />
          <input type="password" name='password' placeholder='Contraseña' className="pass" />
        </div>
        <p></p>
        <button type="submit" name="enviar" className="buton">INGRESAR</button>
      </form>
    </div>
  );
}

export default Login