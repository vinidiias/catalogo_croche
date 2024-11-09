import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CreateCrochet.module.css'

const CreateCrochet = () => {
  const [img, setImg] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [color, setColor] = useState('')
  
  const location = useLocation()
  const navigate = useNavigate()
  const token = location.state ? location.state.token : null;  // Garantir que o token seja acessado corretamente

  useEffect(() => {
    console.log(token)
    if(token === null || token  === undefined || token === '' ) navigate('/')

  },[token])
  async function handleFileChange(e) {
    const file = e.target.files[0]

    const setters = {
      img: setImg,
      img2: setImg2,
      img3: setImg3,
      img4: setImg4
    }

    if(file){
      const base64Img = await convertToBase64(file)
      setters[e.target.name](base64Img)
    }
  }

  // Função para converter o arquivo de imagem em Base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

    return (
      <div style={{backgroundColor: backgroundColor}} className={styles.form_container}>
        <form className={styles.form}>
          <div className={styles.photos}>
            <label htmlFor="img">
              {img ? (
                <img src={img} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="img"
                    name="img"
                    className={styles.file}
                    placeholder="teste"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFileChange}
                  />
                  <span>Selecionar</span>
                </>
              )}
            </label>
            <label htmlFor="img2">
              {img2 ? (
                <img src={img2} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="img2"
                    name="img2"
                    className={styles.file}
                    placeholder="teste"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFileChange}
                  />
                  <span>Selecionar</span>
                </>
              )}
            </label>
            <label htmlFor="img3">
              {img3 ? (
                <img src={img3} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="img3"
                    name="img3"
                    className={styles.file}
                    placeholder="teste"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFileChange}
                  />
                  <span>Selecionar</span>
                </>
              )}
            </label>
            <label htmlFor="img4">
              {img4 ? (
                <img src={img4} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="img4"
                    name="img4"
                    className={styles.file}
                    placeholder="teste"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFileChange}
                  />
                  <span>Selecionar</span>
                </>
              )}
            </label>
          </div>
          <div className={styles.info}>
            <div className={styles.input}>
              <label style={{color: color}} htmlFor="name">Nome:</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={styles.input}>
              <label style={{color: color}}htmlFor="description">Descrição:</label>
              <textarea name="description" id="description"></textarea>
            </div>
            <div className={styles.input}>
              <label style={{color: color}}htmlFor="metrics">Métrica:</label>
              <input type="text" name="metrics" id="metrics" required />
            </div>
            <div className={styles.input}>
              <label style={{color: color}} htmlFor="value">Valor:</label>
              <input type="text" name="value" id="value" required />
            </div>
            <div className={styles.buttons}>
              <button style={{border: `2px solid ${color}`, color: color}}>Criar</button>
              <input type="color" onChange={(e) => setBackgroundColor(e.target.value)} />
              <input type="color" onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
        </form>
      </div>
    );
}

export default CreateCrochet