<<<<<<< HEAD
'use client'
import style from './contacto.module.css'
import ValidarFormulario from '../Validaciones/ValidacionesForm'
=======
import Footer from '../componente inicio/Footer'
import style from './contacto.module.css'
>>>>>>> 2eccf7e5921c22177fea17798a0e777709cd719a

export default function Contacto (){
    return (
            <div>
                <div className={style.presentContact}>
                    <h1>Contacto</h1>
                </div>
                <div className={style.form}>
                    <div className={style.formInputInfo}>
                            <div></div>
                            <div className={style.strongForm}>
                                <div>
                                    <strong>914-123-456</strong>
                                </div>
                                <div>
                                   <strong >|</strong> 
                                </div>
                                <div>
                                    <strong >INFO@MISITIO.COM</strong>
                                </div>                                
                            </div>
                            <div >   
                            <p className={style.contactoP}>   Párrafo. Haz clic aquí para agregar tu propio texto y editar. 
                                Es fácil. Haz clic en "Editar Texto" o doble clic aquí para 
                                agregar tu contenido y cambiar la fuente.
                            </p>                            
                              
                            </div>
                    </div>
                    
                    <div className={style.formInput}>
                        <div className={style.textInp} >
                            <input 
<<<<<<< HEAD
                                id='name-contacto'
                                name='NameContacto'
                                type="text" 
                                placeholder='Nombre' />
                            <input 
                                id='email-contacto'
                                name='EmailContacto'
                                type="email" 
=======
                                type="text" 
                                placeholder='Nombre' />
                            <input 
                                type="text" 
>>>>>>> 2eccf7e5921c22177fea17798a0e777709cd719a
                                placeholder='Email'/> 
                        </div>
                        <div className={style.formInput}>
                            <textarea 
                                className={style.textarea}
                                name="" 
                                id="" 
                                cols="80" 
                                rows="6"
                                placeholder='Escribe tu mensaje aqui'
                                ></textarea>
                        </div>
                        <div className={style.formInput}>
<<<<<<< HEAD
                            <button 
                                onClick={ValidarFormulario}
                                className={style.btnContacto} 
                                >Enviar
                            </button>
=======
                            <button className={style.btnContacto} >Enviar</button>
>>>>>>> 2eccf7e5921c22177fea17798a0e777709cd719a
                        </div>
                    </div>
                 
                </div>
            </div>)

}