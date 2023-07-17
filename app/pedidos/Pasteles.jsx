'use client'
import React, { useState } from 'react'
import style from './pedido.module.css'
import Link from 'next/link'

const PastelesArray = [
    {
        indice:1,
        titulo:' Pastel Floral',
        alt :'Imagen pastel',
        precio: 50,
        src :'https://static.wixstatic.com/media/24536d_96cd17c3bb544ba8a965cf543bd4b035~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_96cd17c3bb544ba8a965cf543bd4b035~mv2_d_2000_2000_s_2.jpg'
    },
    {
        indice:2,
        titulo:'Pastel Romantico',
        alt :'Imagen pastel',
        precio: 60,
        src :'https://static.wixstatic.com/media/24536d_a4ce138e10884c6ca92dd6ca27164499~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_a4ce138e10884c6ca92dd6ca27164499~mv2_d_2000_2000_s_2.jpg'
    },
    {
        indice:3,
        titulo:'Pastel Perlas',
        alt :'Imagen pastel',
        precio: 70,
        src :'https://static.wixstatic.com/media/24536d_502296bfc16843e5b229ad7abbb614b7~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_502296bfc16843e5b229ad7abbb614b7~mv2_d_2000_2000_s_2.jpg'
    },
    {
        indice:4,
        titulo:'Pastel Dorado',
        alt :'Imagen pastel',
        src :'https://static.wixstatic.com/media/24536d_ca4d56b6784041c0b4285cbc31b974f4~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_ca4d56b6784041c0b4285cbc31b974f4~mv2_d_2000_2000_s_2.jpg',
        precio: 80

    },
    {
        indice:5,
        titulo:' Pastel Clasico',
        alt :'Imagen pastel',
        src :'https://static.wixstatic.com/media/24536d_c3eb6b9f4285405aa3d0ae31f481e87a~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_c3eb6b9f4285405aa3d0ae31f481e87a~mv2_d_2000_2000_s_2.jpg',
        precio: 100

    },
    {        
        indice:6,
        titulo:'Pastel Rosa',
        alt :'Imagen pastel',
        src :'https://static.wixstatic.com/media/24536d_8eac28fe6f0d46e1861245652f7016a2~mv2_d_2000_2000_s_2.jpg/v1/fill/w_356,h_356,al_c,q_80,enc_auto/24536d_8eac28fe6f0d46e1861245652f7016a2~mv2_d_2000_2000_s_2.jpg',
        precio: 75
    }]

const Pasteles = () => {
    const [search, setSearch] = useState('')
    const [pasteles, setPasteles] = useState (PastelesArray)

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