import React from 'react'
import style from './pedido.module.css'

const Oferta = () => {

    
  return (
             <div className={style.presentOferta}>
                    <div>
                        <h2>OFERTA DE PASTELES</h2> 
                        <div className={style.font}>Servicio diario de 12:00 a 17:00</div>
                    </div>
                    <div className={style.ofertaAbajo}>
                        <h3>Pasteles de Boda</h3>    
                    </div>
                </div>
  )
}

export default Oferta