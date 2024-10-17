import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/path-no-background.png'


function Navbar() {
  return (
    <nav className={style.navbar}>
        
      <div className={style.logo}>
        <Link to='/'><img src={logo} alt='PathWay Consultoria' /></Link>
      </div>
      
        <ul className={style.navLinks}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
          <li><Link to="/vagas">Vagas</Link></li>
          <li><Link to="/contactos">Contactos</Link></li>
          <li><button className= {style.registar}>Registar-se</button></li>
        </ul>
    
      </nav>
  )
}

export default Navbar