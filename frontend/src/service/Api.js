import axios from 'axios'

//https://catalogo-croche-4s4o.vercel.app
const api = axios.create({
    baseURL: 'https://catalogo-croche-4s4o.vercel.app'
})

export default api