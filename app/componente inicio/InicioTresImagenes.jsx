import React from 'react'
import style from '../inicio.module.css'
import Link from 'next/link'
const InicioTresImagenes = () => {
  return (
    <div className={style.marco}>
        <div className={style.titulo}>
            LOS PASTELES DE ALE
        </div>
        <div className={style.tresImg}>
            <div>
                <img 
                    className={style.img} 
                    src="https://static.wixstatic.com/media/e1c78c_2b251c8e958e4c798589ec994a25b446~mv2_d_1800_2424_s_2.jpg/v1/fill/w_824,h_1378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1c78c_2b251c8e958e4c798589ec994a25b446~mv2_d_1800_2424_s_2.jpg" 
                    alt="imagen pastel" />
            </div>
            <div className={style.imgcentro}>
                <div className={style.p}>                     
                        <p>Diseño de pasteles para bodas y celebraciones</p>                     
                        <Link className={style.btnCentro} href="/pedidos">Hacer un pedido</Link>
                </div>
                
            </div>
            <div>
                <img 
                src="https://static.wixstatic.com/media/e1c78c_c1bbc677e5ad4ee8849ce097f0007901~mv2_d_1200_1616_s_2.jpg/v1/fill/w_824,h_1378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1c78c_c1bbc677e5ad4ee8849ce097f0007901~mv2_d_1200_1616_s_2.jpg" 
                className={style.img}  
                alt="Imagen pastel" />
            </div>
        </div>            
  </div> 
  )
}

export default InicioTresImagenes