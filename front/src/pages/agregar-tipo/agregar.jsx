import React from 'react'
import Navbar from '../../components/navegacion/Navbar'
import '../../css/Add-medicines.css'

const mod = () => {
    return (
        <div className="container-mod">
            <Navbar />
            <div className="container-table">
                <div className="container-add">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default mod