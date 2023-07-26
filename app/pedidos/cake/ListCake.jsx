'use client'
import style from '../pedido.module.css'
import cakes from './cakes.json'
import Cake from './Cake'
import React, { useContext } from 'react'
import { CartContext} from '../ShopContext'

const ListCake = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr)=>{
        return acc + curr.quantity
    },0)

    const totalPrice = cart.reduce((acc, curr)=>{
        return acc + curr.quantity * curr.precio;
    },0)
  return (
    
            <div >
                <div >
                    <div className={style.comprasMuestra}>
                        {quantity > 0 && (
                        <section className={style.fijo}>
                            <div className={style.tituloCompras}>Compras</div>  
                            <div className={style.fondoCompras}>{quantity}</div>
                        </section>
                        )}
                        {totalPrice > 0 && (
                            <section className={style.fijo}>
                                <div className={style.tituloCompras}>Monto </div>
                                <div className={style.fondoCompras}>${totalPrice}</div>
                                 
                            </section>
                        )}
                    </div>
                </div>
                <div className={style.pasteles}>
                {cakes.map((cake, index)=>{
                return (
                        <Cake key={index} {...cake}/>
                        )
                })} 
                </div>

            </div>        

  )
}

export default ListCake