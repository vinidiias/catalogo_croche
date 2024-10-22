import styles from './NavBar.module.css'

import Container from './Container';

const NavBar = () => {
    return (
      <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>Artes de Crochê</li>
              <li><span>Catálogo</span></li>
              <li>Sobre</li>
            </ul>
      </nav>
    );
}

export default NavBar