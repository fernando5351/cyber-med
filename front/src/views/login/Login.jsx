import React, { useState } from "react";
import { useNavigate } from "react-router";
import lock from "../../icon/Login/password.png";
import mail from "../../icon/Login/email.png";
import styles from "../../css/login.module.css";


function Login() {
  
    // capturar datos con el hook 
  const [login, setLogin] = useState({
    user_email: "",
    user_password: ""
  })

    const change = (e) =>{
      console.log(e.target.value);
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      })
    }
    //destructuracion
    let {user_email,user_password} = login;

    //redireccionar al home

    let navigate = useNavigate()

    const handleSubmit = () => {


     //validacion de que llenes los campos requeridos
       if (user_email === "" || user_password === ""){
        alert("campos incompletos")
      } else {
        const RequestInit = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(login)
        }
        fetch('http://localhost:4000/Login/web', RequestInit)
        .then( res => res.json() )
        .then( res => console.log(res))
        // .then( navigate("/medicinas") )
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
                type="text"
                name="user_email"
                placeholder="Correo"
                className={styles.mail}
                onChange={change}
              />
            </div>
            <div className={styles.div}>
              <img className={styles.lock} src={lock} alt="" />
              <input
                type="password"
                name="user_password"
                placeholder="Contraseña"
                className={styles.pass}
                onChange={change}
              />
            </div>
            <p></p>
            <button
              type="submit"
              name="enviar"
              className={styles.buton}
              onClick={ (e) => {
                handleSubmit();
                e.preventDefault();
              }}
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
