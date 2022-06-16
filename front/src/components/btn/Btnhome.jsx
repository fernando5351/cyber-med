import React from 'react';
import Lupita from '../../icon/Home/lupa.png';
import '../../css/btnhome.css'

function Btnhome() {
  return (
    <div className='row content'>
      <form className='col s12 content'>
         <div className='input-field col s3 content'>
             <select class='browser-default' id='selecttype'>
               <option id='options' value='0' disabled selected>ADMINISTRACION</option>
               <option id='options' value='1'>Option 1</option>
               <option id='options' value='2'>Option 2</option>
               <option id='options' value='3'>Option 3</option>
             </select>
         </div>
         <div className='input-field col s3 content'>
             <input placeholder='NOMBRE' id='Nombrein' type='text' class='validate  entradatext' />             
         </div>
         <div className='input-field col s3 content'>
         <select class='browser-default' id='selectuse'>
               <option id='options' value='' disabled selected>USO</option>
               <option id='options' value='1'>Option 1</option>
               <option id='options' value='2'>Option 2</option>
               <option id='options' value='3'>Option 3</option>
             </select>
         </div>
         <div className='input-field col s3 content'>
             <a class='waves-effect waves-light btn-large Btnn'>
               <img 
               className='lupa'
               src={Lupita} 
               alt='' />
             </a>
         </div>
      </form>
    </div>
    
            

    
  )
}

export default Btnhome;