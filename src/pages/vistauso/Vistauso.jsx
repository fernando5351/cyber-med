import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import '../../css/vistauso.css'

function Vistauso() {
    return(
      <div className='contenedor-vistauso'>
        <Navbar />
          <div className='contenedor-principal'>
            <Barranav />
            <h1>HOLA MUNDO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus architecto delectus sequi tempore quia nihil, voluptates eum unde, assumenda at officia similique quae? Aliquam saepe voluptates distinctio quasi et!</p>
          </div>
      </div>
    );
}

export default Vistauso;