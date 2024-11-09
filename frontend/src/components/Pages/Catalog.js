import { useEffect, useRef } from 'react';
import CrochetCard from '../crochet/CrochetCard'
import styles from './Catalog.module.css'
import { useInView } from 'framer-motion';

const Catalog = () => {
    return (
      <div className={styles.catalog}>
        <CrochetCard
          Backgroundcolor="#303030"
          colorFont="white"
          img="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
          name="Jogo de tapete"
          description="Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
          valor="120"
        />
        <CrochetCard
          img="https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg"
          Backgroundcolor="#CCCBCB"
          colorFont="#3d3d3d"
          name="Jogo de tapete"
          description=" Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
          valor="200"
        />
        <CrochetCard
          img="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltu0tkzz8jl5a6.webp"
          Backgroundcolor="#3C3C3C"
          colorFont="white"
          name="Jogo de tapete"
          description="Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
          metrics="12x15"
          valor="180"
        />
      </div>
    );
}

export default Catalog