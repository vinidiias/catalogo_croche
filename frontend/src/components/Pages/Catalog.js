import { useEffect, useState } from 'react';
import CrochetCard from '../crochet/CrochetCard'
import styles from './Catalog.module.css'
import api from '../../service/Api';
import Loading from '../layout/Loading';

const Catalog = () => {
  const [crochets, setCrochets] = useState([]);
  const [center, setCenter] = useState('')

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

  useEffect(() => {
    if(crochets.length > 0) setCenter('')
    else setCenter('center')
  }, [crochets.length, setCenter])

  console.log(crochets)

  const buyHandler = (id, name) => {
    //5545988231226
    window.open(`https://wa.me/5545988231226?text=Olá tenho interesse no ${name} https://catalogo-croche.vercel.app/crochet/${id}`)
  }

  return (
    <div className={`${styles.catalog} ${styles[center]}`}>
  {crochets.length < 0 ? 
        (<>
        {crochets.map((crochet) => (
          <CrochetCard
            id={crochet._id}
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
            submitHandler={buyHandler}
          />
        ))}
        </>) : (<Loading />)} 
    </div>
  );
}

export default Catalog