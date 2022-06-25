import vistamed from './css.module.css'
import Navbar from '../../components/navegacion/Navbar'
import imgsubir from '../../icon/Create/subir.png'

function VistaMedy() {
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
                            <div className={vistamed.caja}>
                                <label id={vistamed.estiloColor}>DESCRIPCION :</label>
                                <input id={vistamed.colorInfo} type="text" />
                            </div>
                            <div className={vistamed.multiSelector}>
                                <select name="language" class="custom-select" multiple>
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="sql">SQL</option>
                                    <option value="kotlin">Kotlin</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VistaMedy;