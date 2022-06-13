import React from "react";
import Navbar from '../../components/navegacion/Navbar';
import '../../css/modificacionmed.css'

function Modificacionmed() {
    return(
        <div>
            <Navbar />
               <div className='contenedor-modificacion'>
                <div className='contenedor-img'>
                </div>
               <div className='contenedor-dato'>
                <img src="" alt="" />
                 </div>
            </div>
            <div className='content-info'>
            <div className='contenedor-info'>
            </div>
            </div>
        </div>  
    );
}

export default Modificacionmed;