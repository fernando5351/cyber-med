import React, { useState, useEffect } from "react";
import style from "../src/css/register.module"

const AuthFalse = () => {
  
  const [register, setRegister] = useState([])

  useEffect(() => {
    sessionStorage.setItem('session', JSON.stringify(register))
  }, [register])
  
  return (
    <div className={style.container}>

    </div>
  )
};

export default AuthFalse;
