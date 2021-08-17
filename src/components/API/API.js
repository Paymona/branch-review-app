import axios from 'axios'

const API = axios.create({
  baseURL: `https://api.retail.paymona.com/`
})

export default API