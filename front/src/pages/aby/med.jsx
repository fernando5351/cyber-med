import vistamed from './css.module.css'
import select from './select.module.css'
import Navbar from '../../components/navegacion/Navbar'
import imgsubir from '../../icon/Create/subir.png'
import Select from 'react-select'
function VistaMedy() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div>
            <Navbar />
            <div className={vistamed.contentPrincipal}>
                <div className={vistamed.contentModificacion}>
                    <div className={vistamed.Img}>
                        <a className={vistamed.butonmed}>
                            <img className={vistamed.subiricon}
                                src={imgsubir}
                                alt="" />
                        </a>
                    </div>
                    <div className={vistamed.Dato}>
                        <form id={vistamed.estiloForm}>
                            <div className={vistamed.contenedorLinea}>
                                <label id={vistamed.color}>PRECIO :</label>
                                <input id={vistamed.estilo} type="text" />
                            </div>
                            <div className={vistamed.contenedorLinea}>
                                <label id={vistamed.color}>GRAMO :</label>
                                <input id={vistamed.estilo} type="text" />
                            </div>
                            <div className={vistamed.contenedorLinea}>
                                <label id={vistamed.color}>MARCA :</label>
                                <input id={vistamed.estilo} type="text" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={vistamed.contentInfo}>
                    <div className={vistamed.Info}>
                        <form id={vistamed.formEstilo}>
                            <div className={vistamed.containerFormMed}>
                                <div className={vistamed.caja}>
                                    <label id={vistamed.estiloColor}>DESCRIPCION :</label>
                                    <input id={vistamed.colorInfo} type="text" />
                                </div>
                                <div className={select.Caja}>
                                    <div className={select.estilo}>
                                        <Select className={select.Select} isMulti options={options} />
                                    </div>
                                    <div className={select.estilo}>
                                        <Select options={options} className={select.options} />
                                    </div>
                                </div>
                                <div className={`${vistamed.caja} ${vistamed.estiloBottom}`}>
                                    <label id={vistamed.estiloColor}>CANTIDAD :</label>
                                    <input id={vistamed.colorInfo} type="text" />
                                </div>
                            </div>
                            <div className={vistamed.containerFormBtn}>
                                <button className={vistamed.btnForm}>hola</button>
                                <button className={vistamed.btnForm}>hola</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VistaMedy;