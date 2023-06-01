import React from 'react'
import style from './pedido.module.css'
import Link from 'next/link'

const Form = () => {
  return (
            <form action="" className={style.form}>
                    <Link 
                        href={'/'}
                        className={style.recoger}>
                            Recoger en persona,Lo antes posible
                            (dentro de 15 minutos)
                    </Link> 
                    
                    <div className={style.oferta}>
                            <div className={style.oferta2}>
                                <div className={style.ofertaPasteles}>
                                    OFERTA DE PASTELES
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </div>
                                <div className={style.boda}>
                                    <div className={style.font}>
                                        Pasteles de Boda                                        
                                    </div>
                                    <div className={style.font}>
                                        Pasteles para Celebraciones
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={style.carrito}>
                                <ion-icon name="bag-outline"></ion-icon>
                            </div>
                    </div>
            </form>

  )
}

export default Form