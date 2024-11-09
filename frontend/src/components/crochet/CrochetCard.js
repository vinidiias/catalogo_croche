import { useRef } from 'react'
import Container from '../layout/Container'
import styles from './CrochetCard.module.css'
import { inView, useInView } from 'framer-motion'
import { useEffect } from 'react'

const CrochetCard = ({img, name, description, metrics, Backgroundcolor, colorFont, valor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

    return (
      <div
        style={{ backgroundColor: `${Backgroundcolor}` }}
        className={styles.card}
        ref={ref}
      >
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s ease'
          }}
          className={styles.photos}
        >
          <img src={img} alt="name" />
          <img src={img} alt="name" />
          <img src={img} alt="name" />
          <img src={img} alt="name" />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s ease'
          }}
          className={styles.info}
        >
          <h2 style={{color: `${colorFont}`}} >{name}</h2>
          <p style={{color: `${colorFont}`}} >{description}</p>
          <p style={{color: `${colorFont}`}} >Métricas: {metrics}</p>
          <p style={{color: `${colorFont}`}} >R$ {valor}</p>
          <button style={{color: `${colorFont}`}} >Comprar</button>
        </div>
      </div>
    );
}

export default CrochetCard