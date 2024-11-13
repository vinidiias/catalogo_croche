import { useRef } from 'react'
import Container from '../layout/Container'
import styles from '../crochet/CrochetCard.module.css'
import { inView, useInView } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../service/Api'

const Crochet = () => {
  const [crochets, setCrochets] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate()

  const { id } = useParams()
  
  useEffect(() => {
    const getCrochet = async () => {
      try{
        const crochet = await api.get(`/crochets/${id}`)

        console.log(crochet)

        setCrochets(crochet.data)
      }catch(err){
        console.log(err)
      }
    }
    getCrochet()
  }, [id])

    return (
      <div
        style={{ backgroundColor: `${crochets.Backgroundcolor}` }}
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
          <img src={crochets.img1} alt="foto crochê" />
          <img src={crochets.img2} alt="foto crochê" />
          <img src={crochets.img3} alt="foto crochê" />
          <img src={crochets.img4} alt="foto crochê" />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: 'all 0.7s ease'
          }}
          className={styles.info}
        >
          <h2 style={{color: `${crochets.colorFont}`}} >{crochets.name}</h2>
          <p style={{color: `${crochets.colorFont}`}} >{crochets.description}</p>
          <p style={{color: `${crochets.colorFont}`}} >Métricas: {crochets.metrics}</p>
          <p style={{color: `${crochets.colorFont}`}} >R$ {crochets.value}</p>
          <button style={{color: `${crochets.colorFont}`}} onClick={() => navigate('/')} >Voltar</button>
        </div>
      </div>
    );
}

export default Crochet