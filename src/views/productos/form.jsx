import React, { useState, useContext } from 'react'
import Navbar from "../../components/navegacion/Navbar";
import form from "../../css/formProduct.module.css";
import { useNavigate } from 'react-router-dom';
//import imgsubir from "../../icon/Create/subir.png";
import Select from "react-select";
import Swal from 'sweetalert2'
import { ProductContextConsumo } from "../tipo-consumo/arbol_info/ProductContextProvider";
import { ProductContextProduct } from "./arbol_info/ProductContextProvider";
import { ProductContext } from "../tipo_uso/arbol_info/productContextprovider";


const Form = () => {

    const { createProduct } = useContext(ProductContextProduct)
    const { uso } = useContext(ProductContextConsumo)
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

                setPreview(image)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'El archivo debe ser una imagen',
                    timer: '2000',
                }).then((res) => console.log(res))
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
    const map = uso.map((arrElement) => ({
        label: arrElement.tipo_consumo,
        value: arrElement.id
        // { value: "Opcion 1", label: "Opcion 1" },
    }));

    const usoSelect = products.map((uso) => ({
        label: uso.tipo_uso,
        value: uso.id
    }))
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
    const handleSubmit = async () => {
        if (nombre === "" || precios === "" || descripcion === "" || id_tipo_consumo === "" || id_tipo_uso === "" || marca === "" || cant_gramos === "" || cantidad_medicamento === "" || preview === "https://res.cloudinary.com/dtbs1ycrd/image/upload/v1664686909/upload/subir_y1dery.png") {
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'TODOS LOS CAMPOS SON REQUERIDOS',
                timer: '2000',
            }).then((res) => console.log(res))
        } else {
            const form = document.getElementById('formData')

            const formData = new FormData(form);

            //formData formulario xd
            createProduct(formData)

            let timerInterval
            Swal.fire({
                title: 'Guardando cambios',
                text: 'por favor espere, en breve sera redirigido en breve.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            setTimeout(() => {
                navigate("/medicinas")
            }, 2800);
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
                                    <input name='precios' id={form.estilo} type="number" 
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
                                            options={usoSelect}
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
                                id="b"
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