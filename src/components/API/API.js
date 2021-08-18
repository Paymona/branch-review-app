import axios from 'axios'

const API = axios.create({
  baseURL: `http://192.168.0.108:5000/v1/`
})

export default API