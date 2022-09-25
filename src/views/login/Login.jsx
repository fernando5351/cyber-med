import React, { useState, useEffect } from "react";
import lock from "../../icon/Login/password.png";
import mail from "../../icon/Login/email.png";
import styles from "../../css/login.module.css";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Login() {

  const url = `http://localhost:4000/login/web`
  //const url = `https://ciber-med-api.herokuapp.com/register/web`
  const [body, setBody] = useState({
    user_email: "",
    user_password: ""
  });

  const navigate = useNavigate();

  const onChange = (event) => {
    setBody({
      ...body,
      [event.target.name]: event.target.value,
    });
  };


  //destruction
  let { user_email, user_password } = body

  const handleSubmit = () => {
    if ( user_email === "" || user_password === "" ) {
      swal({
        icon: 'error',
        title: 'ERROR',
        text: 'TODOS LOS CAMPOS SON REQUERIDOS',
      })
    } else {
      console.log(body);
      const RequestInit = {
        mode: 'cors',
        method: 'POST',
        header: { 
          'Origin': 'http://localhost:3000',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          
        },
        body: JSON.stringify(body)
      }
      fetch( url, RequestInit )
      .then( res => res.text() )
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.login}>
        <div className={styles.contenedorLogin}>
          <div className={styles.title}>
            <p className={styles.letter}>¡Ingresa a tu cuenta!</p>
          </div>
          <form className={styles.login}>
            <div className={styles.div}>
              <img className={styles.mailler} src={mail} alt="" />
              <input
                onChange={onChange}
                type="text"
                name="user_email"
                placeholder="Correo"
                className={styles.mail}
              />
            </div>
            <div className={styles.div}>
              <img className={styles.lock} src={lock} alt="" />
              <input
                onChange={onChange}
                type="password"
                name="user_password"
                placeholder="Contraseña"
                className={styles.pass}
              />
            </div>
            <p></p>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit()
                e.preventDefault()
              }}
              name="enviar"
              className={styles.buton}
            >
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
