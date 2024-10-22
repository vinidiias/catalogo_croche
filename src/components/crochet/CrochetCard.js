import Container from '../layout/Container'
import styles from './CrochetCard.module.css'

const CrochetCard = ({img, name, description, metrics }) => {
    return(
        <div className={styles.card}>
                <img src={img} alt="name" />
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Métricas: {metrics}</p>
                    <button>Comprar</button>  
                </div>
        </div>
    )
}

export default CrochetCard