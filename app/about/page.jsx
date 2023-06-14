import Footer from '../componente inicio/Footer'
import style from './About.module.css'

export default function About (){
    return (
        <div>

            <div className={style.about}>
                <div className={style.tituloAbout}>
                    <h1>Sobre mí</h1>
                    <hr className={style.hr} />
                    <strong>ANA GÓMEZ - MAESTRA PASTELERA Y BLOGUERA</strong> 
                </div>
                <div>
                    <img 
                        className={style.imgAbout}
                        src="https://static.wixstatic.com/media/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg/v1/fill/w_610,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg" 
                        alt="" />
                </div>
                <div className={style.textAbout}>
                    <p>
                        Párrafo. Haz clic para editar y agregar tu propio texto. 
                        Es fácil. Haz clic en "Editar Texto" o doble clic aquí para
                        agregar tu contenido y cambiar la fuente. Puedes arrastrar
                        y soltar este texto donde quieras en tu página. En este 
                        espacio puedes contar tu historia y permitir que tus 
                        usuarios sepan más sobre ti.
                    </p>
                    <p>
                        Este es un buen espacio para extenderte sobre tu empresa y 
                        servicios. Puedes usar este espacio para incorporar más detalles
                        sobre tu empresa. Escribe sobre tu personal y los servicios que 
                        ofreces. Cuéntales a los visitantes cómo se te ocurrió la idea 
                        de tu negocio y diles qué te diferencia de tus competidores. 
                        Haz que tu empresa se destaque y muestra a tus visitantes quién eres.
                    </p>
                </div>
            </div>
        </div>
    )
}