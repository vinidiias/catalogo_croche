import axios from 'axios'

//https://catalogo-croche-4s4o.vercel.app
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api