import styles from './Footer.module.css'

import { FaRegCopyright } from "react-icons/fa";
import { TiSocialInstagram } from 'react-icons/ti'
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href="https://www.instagram.com/artesdecroche/" target="_blank" rel="noopener noreferrer">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5545988231226">
              <IoLogoWhatsapp />
            </a>
          </li>
        </ul>
        <p className={styles.copy_right}>
          <span>Artes de Crochê</span> &copy; 2024
        </p>
      </footer>
    );
}

export default Footer