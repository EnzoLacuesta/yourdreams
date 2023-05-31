import React from 'react'
import style from './TuGusto.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
        
        <div className={style.h1footer}>
           <strong>Suscríbete a mi newsletter</strong> 
            <div>           
                <input 
                    type="mail" 
                    placeholder='Direccion de email'
                    className={style.inputFooter} />
                
            </div>
            <div>
                <button className={style.btnFooter}>Subscribete ahora</button>
            </div>
           
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