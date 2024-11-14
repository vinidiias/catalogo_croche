import { useRef } from 'react'
import styles from './CrochetCard.module.css'
import { useInView } from 'framer-motion'

const CrochetCard = ({id, img1, img2, img3, img4, name, description, metrics, Backgroundcolor, colorFont, valor, submitHandler }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const submit = (e) => {
    e.preventDefault()

    submitHandler(id, name)
  }

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
          <img src={img1} alt="name" />
          <img src={img2} alt="name" />
          <img src={img3} alt="name" />
          <img src={img4} alt="name" />
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
          <button style={{color: `${colorFont}`}} onClick={submit} >Comprar</button>
        </div>
      </div>
    );
}

export default CrochetCard