import { useEffect, useRef } from 'react';
import CrochetCard from '../crochet/CrochetCard'
import styles from './Catalog.module.css'
import { useInView } from 'framer-motion';

const Catalog = () => {
  const container = useRef(null)
  const ref = useRef(null)
  const isInView = useInView({ root: container })

    return (
      <div ref={container} style={{overflow: 'scroll'}} className={styles.catalog}>
        <CrochetCard
          view={ref}
          Backgroundcolor="#303030"
          colorFont="white"
          img="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
          name="Jogo de tapete"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
        />
        <CrochetCard
          view={ref}
          img="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
          colorFont="white"
          name="Jogo de tapete"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
        />
        <CrochetCard
          view={ref}
          img="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
          colorFont="white"
          name="Jogo de tapete"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
        />
      </div>
    );
}

export default Catalog