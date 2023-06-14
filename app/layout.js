import Navigation from "./component/Navigation"
import Footer from "./componente inicio/Footer"
import style from './inicio.module.css'


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={style.body}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
