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
  const [showButton, setShowButton] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()
  const token = location.state ? location.state.token : null;  // Garantir que o token seja acessado corretamente

  useEffect(() => {
    if(token === null || token  === undefined || token === '' ) navigate('/')

  },[token, navigate])

// Função para lidar com o envio de múltiplos arquivos
async function uploadFiles(event) {
  event.preventDefault(); // Evita o reload da página

  // Seleciona os arquivos de um input com `multiple`
  const files = document.getElementById('imagem').files;

  if (files.length === 0) {
      alert("Selecione pelo menos um arquivo.");
      return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length && i < 4; i++) { // Limite de 4 arquivos
      formData.append('imagem', files[i]);
  }

  fetch("https://catalogo-croche-4s4o.vercel.app/file", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro no upload.");
      }
      return response.json(); // Retorna a resposta JSON
    })
    .then((data) => {
      console.log("URLs das imagens:", data.urls); // Acessa o resultado da Promise
      setImg1(data.urls[0])
      setImg2(data.urls[1])
      setImg3(data.urls[2])
      setImg4(data.urls[3])
      alert('Imagens carregadas com sucesso!')
    })
    .catch((error) => console.error("Erro:", error));
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
      value,
      backgroundColor,
      color
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
            <label htmlFor="imagem">
              {img1 ? (
                <img src={img1} alt='foto-croche' />
              ) : (
                <>
                  <input
                    id="imagem"
                    name="imagem"
                    className={styles.file}
                    placeholder="teste"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    multiple
                    onClick={() => setShowButton(true)}
                  />
                  <span>Selecionar 4 fotos</span>
                  {showButton && (<button onClick={uploadFiles} >Enviar fotos</button>)}
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