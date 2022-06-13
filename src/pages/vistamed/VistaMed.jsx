import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import '../../css/vistamed.css'

function Vistamed() {
    return(
      <div className='contenedor-vistamed'>
        <Navbar />
          <div className='contenedor-principal'>
            <Barranav />
            <h1>VISTA MED</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus architecto delectus sequi tempore quia nihil, voluptates eum unde, assumenda at officia similique quae? Aliquam saepe voluptates distinctio quasi et!</p>
          </div>
      </div>
    );
}
export default Vistamed;
