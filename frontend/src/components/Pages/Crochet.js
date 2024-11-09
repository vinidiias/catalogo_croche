import { useRef } from 'react'
import Container from '../layout/Container'
import styles from '../crochet/CrochetCard.module.css'
import { inView, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Crochet = ({img, name, description, metrics, Backgroundcolor, colorFont, valor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate()

  //const { id } = useParams
  //requisicao GET com id do param

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
          <img src='https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg' alt="name" />
          <img src='https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg' alt="name" />
          <img src='https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg' alt="name" />
          <img src='https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg' alt="name" />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s ease'
          }}
          className={styles.info}
        >
          <h2 style={{color: `${colorFont}`}} >Jogo de Tapete</h2>
          <p style={{color: `${colorFont}`}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam quo, corporis cum eos natus? Iusto libero earum voluptatem veritatis totam placeat perspiciatis deleniti ut iste. Asperiores placeat optio fugiat!</p>
          <p style={{color: `${colorFont}`}} >Métricas: 12x12</p>
          <p style={{color: `${colorFont}`}} >R$ 120</p>
          <button style={{color: `${colorFont}`}} onClick={() => navigate('/')} >Voltar</button>
        </div>
      </div>
    );
}

export default Crochet