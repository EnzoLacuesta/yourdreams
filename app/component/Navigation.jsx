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
                <ion-icon 
                  style={{"font-size": "1.5rem"}}
                  name="person-circle-outline">
                </ion-icon>            
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
              <ion-icon style={{"font-size": "1.5rem"}} name="logo-facebook"></ion-icon>
              <ion-icon style={{"font-size": "1.5rem"}} name="logo-instagram"></ion-icon>
              <ion-icon style={{"font-size": "1.5rem"}} name="mail-outline"></ion-icon>
            </div>
       
        </nav>
)
      
}
