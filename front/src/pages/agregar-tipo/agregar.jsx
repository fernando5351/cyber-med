import React from 'react'
import Navbar from '../../components/navegacion/Navbar'
import '../../css/Add-medicines.css'

const mod = () => {
    return (
        <div className='container-add'>
            <Navbar />
            <div className="container-tab">
                <div className="container-btn">

                </div>
                <div className="container-table">
                    <table className='centered'>
                        <thead className='border-table'>
                            <tr className='background'>
                                <th className='border-table'>ID</th>
                                <th>NOMBRE</th>
                                <th className='border-table-rig'>ACCION</th>
                            </tr>
                        </thead>
                        <tbody className='alt'>
                            <tr className='background'>
                                <td className='border-table'>1</td>
                                <td>Intramuscular</td>
                                <td className='border-table-rig'>Eliminar/Editar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default mod