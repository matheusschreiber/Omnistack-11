import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.16:8080'
  //esse endereço pega do navegador, na aba onde ta rodando o expo
})

export default api