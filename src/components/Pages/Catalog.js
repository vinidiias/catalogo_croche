import CrochetCard from '../crochet/CrochetCard'
import styles from './Catalog.module.css'

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <CrochetCard 
                img="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
                name="Jogo de tapete"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
                metrics="12x15"
            />
        </div>
    )
}

export default Catalog