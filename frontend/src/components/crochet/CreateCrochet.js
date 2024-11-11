import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CreateCrochet.module.css'
import api from '../../service/Api'

const CreateCrochet = () => {
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [metrics, setMetrics] = useState('')
  const [value, setValue] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [color, setColor] = useState('black')
  
  const location = useLocation()
  const navigate = useNavigate()
  const token = location.state ? location.state.token : null;  // Garantir que o token seja acessado corretamente

  useEffect(() => {
    if(token === null || token  === undefined || token === '' ) navigate('/')

  },[token, navigate])

  async function handleFileChange(e) {
    const file = e.target.files[0]

    const setters = {
      img1: setImg1,
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

  function verificateInput(inputs){
    for(const key in inputs) {
      if(key === undefined || key === null || key === '') return 0
      
      return 1
    }
  }
  
  async function submitHandler(e) {
    e.preventDefault()

    const inputs = {
      img1,
      img2,
      img3,
      img4,
      name,
      description,
      metrics,
      value
    }

    if(!verificateInput(inputs)) return alert('Campos incompletos, por favor digite todos!')
      try {
        const crochetCreated = await api.post('/create', inputs, {headers: {'token': `${token}`}})

        console.log(crochetCreated)

        if(!crochetCreated) return alert('Erro ao criar crochê!')
        alert('Crochê criado com sucesso!')

      } catch(err) {
        console.log(err)
      }
  }

    return (
      <div style={{backgroundColor: backgroundColor}} className={styles.form_container}>
        <form className={styles.form}>
          <div className={styles.photos}>
            <label htmlFor="img">
              {img1 ? (
                <img src={img1} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="img"
                    name="img1"
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
              <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.input}>
              <label style={{color: color}}htmlFor="description">Descrição:</label>
              <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
            <div className={styles.input}>
              <label style={{color: color}}htmlFor="metrics">Métrica:</label>
              <input type="text" name="metrics" id="metrics" required onChange={(e) => setMetrics(e.target.value)} />
            </div>
            <div className={styles.input}>
              <label style={{color: color}} htmlFor="value">Valor:</label>
              <input type="text" name="value" id="value" required onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.buttons}>
              <button style={{border: `2px solid ${color}`, color: color}} onClick={submitHandler} >Criar</button>
              <input type="color" onChange={(e) => setBackgroundColor(e.target.value)} />
              <input type="color" onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
        </form>
      </div>
    );
}

export default CreateCrochet