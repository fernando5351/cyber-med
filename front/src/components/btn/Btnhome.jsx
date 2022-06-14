import React from 'react';
import Lupita from '../../icon/Home/lupa.png';
import '../../css/btnhome.css'

function Btnhome() {
  return (
    <div className='row content'>
      <form className='col s12 content'>
         <div className='input-field col s3 content'>
             <select id='selector'>
                     <option value='' disabled selected>USO</option>
                     <option value='1'>Option 1</option>
                     <option value='2'>Option 2</option>
                     <option value='3'>Option 3</option>
             </select>
         </div>
         <div className='input-field col s3 content'>
             <input placeholder='NOMBRE' id='Nombrein' type='text' class='validate  entradatext' />             
         </div>
         <div className='input-field col s3 content'>
         <select id='selector'>
                     <option value='' disabled selected>USO</option>
                     <option value='1'>Option 1</option>
                     <option value='2'>Option 2</option>
                     <option value='3'>Option 3</option>
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



