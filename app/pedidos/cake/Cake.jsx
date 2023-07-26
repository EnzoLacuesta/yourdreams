'use client'
import React, { useContext } from 'react'
import style from '../pedido.module.css'
import { CartContext} from '../ShopContext'

const cake = ({id, titulo, alt, src, precio}) => {

  const [cart, setCart] = useContext(CartContext)

  const addCart = ()=>{
    setCart((currItems)=>{
      const isFoundItems = currItems.find((item) => item.id === id);
      if (isFoundItems) {
        return currItems.map((item)=>{
          if (item.id === id) {
            return {...item, quantity: item.quantity +1}
          }else {
            return  item;
          }
        });
      }else{
        return [...currItems, {id, quantity: 1, precio}]
      }
    })
  }
  const remuveCart = ()=>{
    setCart((currItems)=>{
      if (currItems.find((item)=> item.id === id)?.quantity === 1) {
        return currItems.filter((item)=> item.id !== id)
      }else {
        return currItems.map((item)=>{
          if (item.id === id) {
            return {...item, quantity: item.quantity -1}
          }else{
            return item
          }
        })
      }
    })
  }
  const quantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0
  }

  const quantityPerId = quantityById(id)
  return (
    <div className={style.cajaPedidos} key={cake.id}>
      <div className={style.cakeAtr}>
            <div>
              {titulo}
            </div>
            <div>$
              {precio}
            </div>
            {quantityPerId > 0 && (
              <div className={style.num}>{quantityPerId}</div>
            )}
            { quantityPerId === 0 ?(
              <button 
                className={style.btnPedidos}
                onClick={ () => addCart()}>
                <ion-icon 
                  name="cart-outline" 
                  style={{"font-size":"1.5rem"}}>
                </ion-icon>
              </button>
            ):
            (
              <div className={style.dosBtn}>
                <button 
                  className={style.btnPedidos2}
                  onClick={ () => addCart()}>
                    Agregar otro
                </button>  
                <button 
                  className={style.btnPedidos2}
                  onClick={ () => remuveCart()}>
                    Remover
                </button>
              </div>


            )
            }

      </div>
      <img 
          src={src} 
          alt={alt}
          className={style.imgPedidos} />
</div>
  )
}

export default cake