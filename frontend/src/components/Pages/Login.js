import { useState } from 'react'
import styles from './Login.module.css'
import api from '../../service/Api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    async function authentinc(e) {
        e.preventDefault()
        
        try{
            const authenticated = await api.post('/session', {
                token
            })
            console.log(authenticated.data); // Verifique a resposta da API aqui


            if(authenticated.data.authorized === true){
                console.log('token antes de navegar', token)
                navigate('/admin/create', {state:  {token} })
            }
        }catch(err){
            alert('Chave incorreta!')
            console.log(err)
        }
    }

    return (
      <div className={styles.form_container}>
        <form className={styles.form}>
            <label htmlFor="token">Chave de acesso:</label>
            <input type="text" name="token" id="token" onChange={(e) => setToken(e.target.value)} required />
            <button onClick={authentinc}>Entrar</button>
        </form>
      </div>
    );
}

export default Login