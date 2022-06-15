import React from 'react'
import Navbar from '../../components/navegacion/Navbar'
import '../../css/Add-medicines.css'

const mod = () => {
    return (
        <div className='container-add'>
            <Navbar />
            <div className="container-tab">
                <div className="container-table">
                    <table className='centered'>
                        <thead id='th'>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody className='tb'>
                            <tr>
                                <td>1</td>
                                <td>Intramuscular</td>
                                <td>eliminar/editar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default mod