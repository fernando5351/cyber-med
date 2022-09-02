import React, { useState, useEffect } from "react";
import lock from "../../icon/Login/password.png";
import mail from "../../icon/Login/email.png";
import styles from "../../css/login.module.css";
import { useNavigate } from "react-router-dom";
import Modal from '../../components/modal/modal'
import Swal from 'sweetalert'

function Login() {

  const [alert, setAlert] = useState(false)

  const url = `http://localhost:4000`
  const [body, setBody] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const onChange = (event) => {
    console.log(event.target.value);
    setBody({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  //destruction
  let { email, password } = body

  const handleSubmit = () => {
    if (email === "" || password === "") {
      Swal("todos los campos son requeridos") 
    } else {
      const RequestInit = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      fetch(url, RequestInit)
        .then(res => res.json())
        .then(navigate("/home"))
    }
  }


  return (
    <div className={styles.body}>
      <Modal
        alert={alert}
        setAlert={setAlert}
      >
        <h1>testo</h1>
        <p>hola</p>
        <button>ok</button>
      </Modal>
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
                name="email"
                placeholder="Correo"
                className={styles.mail}
              />
            </div>
            <div className={styles.div}>
              <img className={styles.lock} src={lock} alt="" />
              <input
                onChange={onChange}
                type="password"
                name="password"
                placeholder="Contraseña"
                className={styles.pass}
              />
            </div>
            <p></p>
            <button
              type="submit"
              onClick={() => {
                handleSubmit()
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
