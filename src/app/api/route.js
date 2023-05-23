import processRequest from '@/utils/processRequest'
import axios from 'axios'

axios.defaults.baseURL = `http://${process.env.API_HOST}:${process.env.API_PORT}`

export async function GET(request) {
  return await processRequest(request, async (action, subAction) => {
    return await axios.get(`/${action}/${subAction}`)
  })
}

export async function POST(request) {
  const reqBody = await request.json()
  
  return await processRequest(request, async (action, subAction) => {
    return await axios.post(`/${action}/${subAction}`, { reqBody })
  })
}