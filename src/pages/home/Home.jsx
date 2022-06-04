import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/login.css'

function Home() {
    return(
      <div className='contenedor'>
         <Navbar 
         logo='carrito'
         />
         <h1>HOLA MUNDO</h1>
      </div>
    );
}  

export default Home;