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
{crochets.length > 0 ? 
        (<>
        {crochets.map((crochet) => (
          <CrochetCard
            key={crochet._id}
            img1={crochet.img1}
            img2={crochet.img2}
            img3={crochet.img3}
            img4={crochet.img4}
            Backgroundcolor={crochet.backgroundColor}
            colorFont={crochet.color}
            name={crochet.name}
            description={crochet.description}
            metrics={crochet.metrics}
            valor={crochet.value}
          />
        ))}
        </>) : (<p className={styles.nothing}>Sem crochês cadastrados</p>)} 
    </div>
  );
}

export default Catalog