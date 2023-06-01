import React from 'react'
import style from './TuGusto.module.css'

const ImgFollow = [
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/01.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/02.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/03.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/04.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/05.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/06.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/07.jpg',
    alt:'Imagen pastel'
  },
  {
    img:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Celebration%20Cakes/08.jpg',
    alt:'Imagen pastel'
  },

]

const FollowMe = () => {
  return (
    <div className={style.FollowMe}>
        <div className={style.h1Follow}>
          <h1 >Sígueme en Instagram</h1>
        </div>       
        <div className={style.divFollow}>
          {ImgFollow.map(item =>(                  
                    <img 
                      className={style.ochoFotos}
                      src={item.img} 
                      alt={item.alt} />
                    ))}
        </div>
    </div>
  )
}

export default FollowMe