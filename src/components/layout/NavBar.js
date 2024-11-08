import styles from './NavBar.module.css'

import Container from './Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className={styles.nav}>
            <ul className={styles.list}>
              <li><Link to='/'>Artes de Crochê</Link></li>
              <li><Link to='/'><span>Catálogo</span></Link></li>
              <li><Link to='/about'>Sobre</Link></li>
            </ul>
      </nav>
    );
}

export default NavBar