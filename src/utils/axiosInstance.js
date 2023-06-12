import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://${process.env.API_HOST}:${process.env.API_PORT}/api-cgi/`
})

export default axiosInstance