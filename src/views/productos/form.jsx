import React, { useState, useContext } from 'react'
import Navbar from "../../components/navegacion/Navbar";
import form from "../../css/formProduct.module.css";
import { useNavigate } from 'react-router-dom';
//import imgsubir from "../../icon/Create/subir.png";
import Select from "react-select";
import Swal from 'sweetalert'
import { ProductContext } from "../tipo-consumo/arbol_info/ProductContextProvider"
import { ProductContextProduct } from "./arbol_info/ProductContextProvider"


const Form = () => {

    const { createProduct } = useContext(ProductContextProduct)
    const { products } = useContext(ProductContext)

    const imgState = "https://res.cloudinary.com/dtbs1ycrd/image/upload/v1664686909/upload/subir_y1dery.png"
    const intial = {
        nombre: "",
        precios: "",
        descripcion: "",
        marca: "",
        cantidad_medicamento: "",
        cant_gramos: "",
    }

    const SelectState = {
        id_tipo_consumo: "",
        id_tipo_uso: ""
    }

    const [file, setFile] = useState()
    const [preview, setPreview] = useState(imgState);
    const [product, setProduct] = useState(intial)
    const [state, setState] = useState(SelectState)

    const dataFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const image = e.target.files[0]
            if (image.type.includes('image')) {
                const reader = new FileReader()
                reader.readAsDataURL(image)

                reader.onload = function load() {
                    setPreview(reader.result)
                }

                setFile(image)
            } else {
                Swal({
                    title: "El archivo debe de ser una imagen",
                    icon: "error",
                    timer: "2000"
                })
            }
        }
    }

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const dataChange = (ev, action) => {
        setState({
            ...state,
            [action.name]: ev.value
        })
    }
    const map = products.map((arrElement) => ({
        label: arrElement.tipo_consumo,
        value: arrElement.id
        // { value: "Opcion 1", label: "Opcion 1" },
    }));

    const navigate = useNavigate()
    const {
        nombre,
        precios,
        descripcion,
        marca,
        cantidad_medicamento,
        cant_gramos
    } = product

    const {
        id_tipo_uso,
        id_tipo_consumo } = state
    const handleSubmit = async (event) => {
        if (nombre === "" || precios === "" || descripcion === "" || id_tipo_consumo === "" || id_tipo_uso === "" || marca === "" || cant_gramos === "" || cantidad_medicamento === "" || file === "https://res.cloudinary.com/dtbs1ycrd/image/upload/v1664686909/upload/subir_y1dery.png") {
            Swal({
                icon: 'error',
                title: 'ERROR',
                text: 'TODOS LOS CAMPOS SON REQUERIDOS',
                timer: '2000'
            }).then((res) => console.log(res))
        } else {
            const form = document.getElementById('formData')

            const formData = new FormData(form);

            createProduct(formData)

            setPreview(imgState)
            setTimeout(() => {
                navigate("/home")
            }, 200);

        }
    }

    return (
        <div>
            <Navbar />
            <div className={form.container}>
                <form id='formData' className={form.data}>
                    <div className={form.contentImg}>
                        <div className={form.containerImg}>
                            <input className={form.pushImg} type="file" name="file" id="file"
                                onChange={dataFile}
                            />
                            <img src={preview} alt="imgPush" />
                        </div>
                        <div className={form.containerName}>
                            <div className={form.productDate}>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>NOMBRE :</label>
                                    <input id={form.estilo} type="text" name="nombre"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>PRECIO :</label>
                                    <input id={form.estilo} type="text" name="precios"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>GRAMOS :</label>
                                    <input id={form.estilo} type="text" name="cant_gramos"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>MARCA :</label>
                                    <input id={form.estilo} type="text" name="marca"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={form.contentData}>
                        <div className={form.boder}>
                            <div className={form.containerTwo}>
                                <div className={form.caja}>
                                    <label id={form.fontStyle}>DESCRIPCION :</label>
                                    <input id={form.colorInfo} type="text" name="descripcion"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={form.cajaSelect}>
                                    <div className={form.estilo}>
                                        <label id={form.titulo}>USO :</label>
                                        <Select
                                            className={form.Select}
                                            options={map}
                                            name="id_tipo_uso"
                                            onChange={dataChange}
                                        />
                                    </div>
                                    <div className={form.estilo}>
                                        <label id={form.titulo2}>ADMINISTRACION :</label>
                                        <Select
                                            options={map}
                                            className={form.options}
                                            name="id_tipo_consumo"
                                            onChange={dataChange}
                                        />
                                    </div>
                                </div>
                                <div className={`${form.caja} ${form.estiloBottom}`}>
                                    <label id={form.estiloColor}>CANTIDAD :</label>
                                    <input id={form.colorInfo} type="text" name="cantidad_medicamento"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={`${form.caja} ${form.estiloBottom}`}>
                                    <label id={form.estiloColor}>LOTE :</label>
                                    <input id={form.colorInfo} type="text" name='lote'
                                        onChange={onChange}
                                    />
                                </div>

                            </div>
                            <div className={form.containerFormBtn}>
                                <button className={form.btnForm}>Cancelar</button>
                                <button className={form.btnForm}
                                    onClick={(event) => {
                                        handleSubmit()
                                        event.preventDefault()
                                    }}
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form