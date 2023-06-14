'use client'
import React from 'react'
import style from './TuGusto.module.css'


const ValidarEmail = ()=>{
  let emailField = document.getElementById('user-email');
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(validEmail.test(emailField.value)){
    alert('Subscribcion con exito');
    return true;
  }else{
    alert('Campo no completado correctamente');
    return false;
  }
}

const Footer = () => {
  return (
    <div className={style.footer}>
        
        <div className={style.h1footer}>
                <strong>Suscríbete a mi newsletter</strong>            
                <input 
                    id="user-email" 
                    name="userEmail"
                    type="email" 
                    placeholder='Direccion de email'
                    className={style.inputFooter} />                                        
                <button onClick={ValidarEmail} className={style.btnFooter}>Subscribete ahora</button>
        </div> 
        <div className={style.divFooterBig}>
            <div className={style.divFooter}>              
                © 2035 Creado por Los Pasteles de Ale con EnzoLacuesta.com
            </div>
        </div>
      
    </div>
  )
}

export default Footer