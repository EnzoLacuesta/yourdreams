import Link from 'next/link'
import style from './Navigation.module.css'


const links = [{
    label:'Inicio',
    route:'/'
  },{
    label:'Sobre mi',
    route:'/about'
  },{
    label:'Pedidos',
    route:'/pedidos'
  },{
    label:'Contacto',
    route:'/contacto'
  }
  ]

export default function Navigation (){
return(
      
        <nav className={style.Navigation}>
            <div className={style.iniciarSesion}>
              <div className={style.iniciarSesion1}>
                <a href="">
                  <ion-icon 
                    style={{"font-size": "1.5rem"}}
                    name="person-circle-outline">
                  </ion-icon>                  
                </a>
            
              </div> 
                <div className={style.iniciarSesion2}>Iniciar sesion</div>
            </div>
            <div>
                 <ul className={style.ul}>
                    {links.map(({label, route})=>
                        <li key={route} className={style.li}>
                            <Link 
                                className={style.link}
                                href={route}>
                                    {label}
                            </Link>                
                        </li>
                    )}
                </ul>
            </div>
            
            <div className={style.logosNav}>
              <a href="https://www.tiktok.com/@tussuenosmiscreaciones"><ion-icon style={{"font-size": "1.5rem"}} name="logo-facebook"></ion-icon></a>
              <a href="https://www.instagram.com/tussuenos.miscreaciones/"><ion-icon style={{"font-size": "1.5rem"}} name="logo-instagram"></ion-icon></a>
              <a href="mailto:enzolacuesta1996@gmail.com"><ion-icon style={{"font-size": "1.5rem"}} name="mail-outline"></ion-icon></a>
              
            </div>
       
        </nav>
)
      
}
