import React, {useState} from 'react';
import Navbar from '../../components/navegacion/Navbar';
import Style from '../../css/form_empresa.module.css'


function Form_empresa(){


    //capturar datos escritos por el usuario

    const [form_empresa, setEmpresa] = useState({
        nombre_empresa: "",
        direccion: "",
        id_producto:"",
        email: "",
        telefono: "",
        lote: "",
        activo: "",
    })

    const change = (event) =>{
        console.log(event.target.value)
        setEmpresa({
            ...form_empresa,
            [event.target.name]: event.target.value
        })
    }

    //destruction
    let { nombre_empesa, direccion,id_producto,email,telefono,lote,activo} = form_empresa;

    const handleSubmit = () => {
        //los campos no deben quedar nulos 
        if (nombre_empesa === "" || direccion === "" || id_producto === "" || telefono === "" || direccion === "" || email === "" || lote === "" || activo === "" ) {
            alert("debe llenar todos los campos no sea aragan")
            return
        } else{
            const RequestInit = {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form_empresa)
            }
            fetch ('http://localhost:4000/empresa', RequestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setEmpresa({
                nombre_empesa: "",
                direccion: "",
                id_producto: "",
                telefono: "",
                email: "",
                lote: "",
                activo: ""

            })
        }
    }


  return (
    <div className={Style.container}>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>REGISTRAR LA EMPRESA </h1>
                <form action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='nombre de la empresa' onChange={change} />
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' onChange={change}/>
                    <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' onChange={change}/>
                    <input  className={Style.input} type="text" name='telefono' placeholder='telefono' onChange={change}/>
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' onChange={change}/>
                    <input  className={Style.input} type="text" name='lote' placeholder='Lote' onChange={change} />
                    <select name="activo" onChange={change}  className={Style.select}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value={1}>activo</option>
                        <option value={0}>inactivo</option>
                    </select>
                    <div className={Style.btn}>
                    <button type='submit' onClick={handleSubmit} className={Style.button}> ENVIAR</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form_empresa;

