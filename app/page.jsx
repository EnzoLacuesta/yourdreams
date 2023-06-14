import React from 'react'
import style from './inicio.module.css'
import TuGusto from './componente inicio/TuGusto'
import DobleImg from './componente inicio/DobleImg'
import FollowMe from './componente inicio/FollowMe'
import InicioTresImagenes from './componente inicio/InicioTresImagenes'

const Inicio = () => {
  return (
    <div>
      <div className={style.contenedor}>
              <InicioTresImagenes/>
              <TuGusto/>
              <DobleImg/>
              <FollowMe/>            
      </div>
    </div>


    
  
  )
}

export default Inicio