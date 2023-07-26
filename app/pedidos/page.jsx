'use client'
import Form from './Form'
import Oferta from './Oferta'
import ListCake from './cake/ListCake'
import style from './pedido.module.css'

export default function Pedidos (){
    return(
        <div>
                <div className={style.presentContact}>
                    <h1>Pedidos</h1>
                </div>
                <Form></Form>         
                <Oferta></Oferta>
                <ListCake></ListCake>
        </div>
    )
}