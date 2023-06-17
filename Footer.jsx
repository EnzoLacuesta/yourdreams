'use client'
import React from 'react'
import style from './TuGusto.module.css'

const handleClick = () => {
    alert('button click catched');
};

const Footer = () => {
  return (
    <div className={style.footer}>
        
        <div className={style.h1footer}>
                <strong>Suscríbete a mi newsletter</strong>            
                <input 
                    type="mail" 
                    placeholder='Direccion de email'
                    className={style.inputFooter} />                                        
                <button onClick={handleClick} className={style.btnFooter}>Subscribete ahora</button>
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