import React, { useState } from 'react';
import lock from '../../icon/Login/password.png';
import mail from '../../icon/Login/email.png';
import styles from  '../../css/login.module.css'
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
    <body className={styles.body}>
      <div className={styles.login}>
        <div className={styles.contenedorLogin}>
          <div className={styles.title}>
            <p className={styles.letter}>¡Ingresa a tu cuenta!</p>
          </div>
          <form className={styles.login}>
            <div className={styles.div}>
              <img
                className={styles.mailler}
                src={mail}
                alt='' />
              <input type="text" name='email'  placeholder='Correo'  />
            </div>
            <div className={styles.div}>
              <img
                className={styles.lock}
                src={lock}
                alt='' />
              <input type="password" name='password'  placeholder='Contraseña' />
            </div>
            <p></p>
            <button  type="submit" onClick={onSubmit} name="enviar" >INGRESAR</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login