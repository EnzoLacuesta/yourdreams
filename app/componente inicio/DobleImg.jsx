import React from 'react'
import style from './TuGusto.module.css'

const DobleImg = () => {
  return (
    <div className={style.DobleImg}>
        <div>
          <img 
            className={style.imgDobleIzquierda}
            src={'https://static.wixstatic.com/media/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg/v1/fill/w_1260,h_872,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg'} 
            alt='Imagen pastel'></img>
        </div>
        <div>
          <img 
          className={style.imgDoble}
            src={'https://static.wixstatic.com/media/2e2a49_484505d397e54215b428ec407ff1a872~mv2.jpg/v1/fill/w_1260,h_872,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_484505d397e54215b428ec407ff1a872~mv2.jpg'} 
            alt='Imagen pastel'>
          </img>
        </div>
    </div>
  )
}

export default DobleImg