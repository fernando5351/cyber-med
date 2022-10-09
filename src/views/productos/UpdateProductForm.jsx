import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../components/navegacion/Navbar";
import form from "../../css/formProduct.module.css";
import { useNavigate } from 'react-router-dom';
//import imgsubir from "../../icon/Create/subir.png";
import Select from "react-select";
import Swal from 'sweetalert'
import { ProductContextConsumo } from "../tipo-consumo/arbol_info/ProductContextProvider"
import { ProductContextProduct } from "./arbol_info/ProductContextProvider"
import { ProductContext } from "../tipo_uso/arbol_info/productContextprovider"


const UpdateProductForm = () => {

    const { updateProduct } = useContext(ProductContextProduct)
    const { uso } = useContext(ProductContextConsumo)
    const { products } = useContext(ProductContext)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('editProduct'))
        if (data) setEdit(data)
    }, [])


    const imgState = "https://res.cloudinary.com/dtbs1ycrd/image/upload/v1664686909/upload/subir_y1dery.png"
    const intial = {
        nombre: "",
        precios: "",
        descripcion: "",
        marca: "",
        cantidad_medicamento: "",
        cant_gramos: "",
    }
    const [edit, setEdit] = useState()
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

                const img = edit.img_url;
                console.log(img);
                console.log(preview);
                if (preview !== imgState) {
                    setFile(image)
                } else {
                    setFile(img)
                }
            } else {
                Swal({
                    title: "El archivo debe de ser una imagen",
                    icon: "error",
                    timer: "2000"
                })
            }
        }
    }

    const onChange = (data, field) => {
        setProduct({
            ...product,
            [field]: data,
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

            //formData formulario xd
            updateProduct(formData)

            setPreview(imgState)
            setTimeout(() => {
                navigate("/home")
            }, 200);

        }
    }

    const handleCancel = () => {
        console.log(edit);
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
                                        value={edit.nombre}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>PRECIO :</label>
                                    <input id={form.estilo} type="text" name="precios"
                                        onChange={onChange}
                                        value={edit.precios}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>GRAMOS :</label>
                                    <input id={form.estilo} type="text" name="cant_gramos"
                                        onChange={onChange}
                                        value={edit.cant_gramos}
                                    />
                                </div>
                                <div className={form.contenedorLinea}>
                                    <label id={form.color}>MARCA :</label>
                                    <input id={form.estilo} type="text" name="marca"
                                        onChange={onChange}
                                        value={edit.marca}
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
                                        value={edit.descripcion}
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
                                            value="5"
                                        />
                                    </div>
                                    <div className={form.estilo}>
                                        <label id={form.titulo2}>ADMINISTRACION :</label>
                                        <Select
                                            options={map}
                                            className={form.options}
                                            name="id_tipo_consumo"
                                            onChange={dataChange}
                                            value={edit.id_tipo_consumo}
                                        />
                                    </div>
                                </div>
                                <div className={`${form.caja} ${form.estiloBottom}`}>
                                    <label id={form.estiloColor}>CANTIDAD :</label>
                                    <input id={form.colorInfo} type="text" name="cantidad_medicamento"
                                        onChange={onChange}
                                        value={edit.cantidad_medicamento}
                                    />
                                </div>
                                <div className={`${form.caja} ${form.estiloBottom}`}>
                                    <label id={form.estiloColor}>LOTE :</label>
                                    <input id={form.colorInfo} type="text" name='lote'
                                        onChange={onChange}
                                        value={edit.lote}
                                    />
                                </div>

                            </div>
                            <div className={form.containerFormBtn}>
                                <button className={form.btnForm}
                                onClick={ (e) => {
                                    handleCancel()
                                    e.preventDefault()
                                }}
                                >Cancelar</button>
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

export default UpdateProductForm