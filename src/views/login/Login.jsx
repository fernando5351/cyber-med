import React, { useState } from "react";
import lock from "../../icon/Login/password.png";
import mail from "../../icon/Login/email.png";
import styles from "../../css/login.module.css";
import swal from 'sweetalert';

function Login() {
  //const url = `http://localhost:4000/login/web`
  //const url = `https://ciber-med-api.herokuapp.com/login/web`
  const url = "https://cyber-med-production.up.railway.app"
  const [body, setBody] = useState({
    user_email: "",
    user_password: ""
  });

  const onChange = (event) => {
    setBody({
      ...body,
      [event.target.name]: event.target.value,
    });
  };


  //destruction
  let { user_email, user_password } = body

  const handleSubmit = () => {
    if (user_email === "" || user_password === "") {
      swal({
        icon: 'error',
        title: 'ERROR',
        text: 'TODOS LOS CAMPOS SON REQUERIDOS',
        timer: '2000'
      })
    } else {
      const RequestInit = {
        mode: 'cors',
        method: 'POST',
        header: {
          'Origin': 'https://cyber-med.vercel.app/',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
          "Accept": 'application/json'
        },
        body: new URLSearchParams(body)
      }
      fetch(url, RequestInit)
        .then(data => data)
        .then(data => {
          if (data.redirected === true) {
            swal({
              icon: 'success',
              title: 'REGISTRO EXITOSO',
              timer: '2000'
            }).then( sessionStorage.setItem("auth", "true") )
            setTimeout(() => {
              window.location.href = `${data.url}`
            }, 1000)
          } else {
            swal({
              icon: 'error',
              title: 'ERROR',
              text: 'Usuario o contraseña incorrecta',
              timer: '2000'
            })
          }
        })
        .catch(err => console.error(err));
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
                type="email"
                name="user_email"
                placeholder="Correo"
                required
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
                required
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
