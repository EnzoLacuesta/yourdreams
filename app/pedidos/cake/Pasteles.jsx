'use client'
import React, { useState } from 'react'
import style from '../pedido.module.css'
import Link from 'next/link'
import cake from '../cake/cakes.json'


const Pasteles = () => {
    const [search, setSearch] = useState('')
    const [pasteles, setPasteles] = useState ([cake])

    let resultado = []
    if (!search){
        resultado = pasteles
    }else{
        resultado = pasteles.filter((dato)=>
        dato.titulo.toLowerCase().includes(search.toLocaleLowerCase()))
    }

  return (
    
    <div>
        <input 
            type="text"
            value={search}
            placeholder='Chocolate, frutilla, vainilla'
            onChange={(e)=>{setSearch(e.target.value)}} 
            className={style.inp}/>
            <div className={style.pasteles}>
            {
                resultado.map(item=>(
                <Link className={style.cajaPedidos} href={'/pedidos/[id]'} as={`/pedidos/${item.indice}`}>                    
                            <div className={style.CajaPrecios} key={item.indice}>
                                <div className={style.divPedidosNombre}>
                                    <p><strong className={style.Font}>{item.titulo}</strong> </p>
                                </div>
                                <div>
                                    <p className={style.font}>{item.precio} €</p>
                                </div>                    
                            </div>
                            <div className={style.divImgPedidos}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className={style.imgPedidos}
                                    />
                            </div>
                </Link>


                ))
            }
        </div>
    </div>
    
  )
}

export default Pasteles