import Footer from '../componente inicio/Footer'
import Celebraciones from './Celebraciones'
import Form from './Form'
import Oferta from './Oferta'
import Pasteles from './Pasteles'
import style from './pedido.module.css'

export default function Pedidos (){
    return(
        <div>
                <div className={style.presentContact}>
                    <h1>Pedidos</h1>
                </div>
                <Form></Form>         
                <Oferta></Oferta>
                <Pasteles></Pasteles>
                <Celebraciones></Celebraciones>
                <Pasteles></Pasteles>
                <Footer></Footer>
        </div>
    )
}