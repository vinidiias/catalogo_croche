import { useEffect, useState } from 'react';
import CrochetCard from '../crochet/CrochetCard'
import styles from './Catalog.module.css'
import api from '../../service/Api';

const Catalog = () => {
  const [crochets, setCrochets] = useState([]);

  useEffect(() => {
    const fetchCrochets = async () => {
      try {
        const response = await api.get("/crochets");
        console.log(response.data);
        setCrochets(response.data); // Use `response.data` para obter os dados da resposta
      } catch (error) {
        console.error("Erro ao buscar crochets:", error);
      }
    };

    fetchCrochets();
  }, []);

  /*
{crochets.length > 0 ? 
        (<>
        {crochets.map((crochet) => (
          <CrochetCard
            key={crochet._id}
            img1={crochet.img1}
            img2={crochet.img2}
            img3={crochet.img3}
            img4={crochet.img4}
            Backgroundcolor="#CCCBCB"
            colorFont="#3d3d3d"
            name={crochet.name}
            description={crochet.description}
            metrics={crochet.metrics}
            valor={crochet.value}
          />
        ))}
        </>) : (<p className={styles.nothing}>Sem crochês cadastrados</p>)} 
  */

  return (
    <div className={styles.catalog}>
      <CrochetCard
        Backgroundcolor="#303030"
        colorFont="white"
        img1="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
        img2="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
        img3="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
        img4="https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/sousplat-de-croche-69.jpg"
        name="Jogo de tapete"
        description="Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
        metrics="12x15"
        valor="120"
      />
      <CrochetCard
        img1="https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg"
        img2="https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg"
        img3="https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg"
        img4="https://img.elo7.com.br/product/685x685/1AED57B/tapete-redondo-branco-e-preto-1-m-tapete-de-barbante.jpg"
        Backgroundcolor="#CCCBCB"
        colorFont="#3d3d3d"
        name="Jogo de tapete"
        description=" Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit aut itaque unde eius molestias obcaecati est quos quo. Totam perspiciatis repellat rem. Quasi iusto ea animi soluta odit molestias."
        metrics="12x15"
        valor="200"
      />
      <CrochetCard
        img1="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltu0tkzz8jl5a6.webp"
        img2="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltu0tkzz8jl5a6.webp"
        img3="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltu0tkzz8jl5a6.webp"
        img4="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltu0tkzz8jl5a6.webp"
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