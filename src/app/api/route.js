import processRequest from '@/utils/processRequest'
import axios from 'axios'

const apiUrl = `https://${process.env.API_HOST}:${process.env.API_PORT}/api-cgi`

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export async function GET(request) {
  return await processRequest(request, async (action, subAction) => {
    try {
      const res = await axios.get(`${apiUrl}/${action}/${subAction}`)
      return res.data
    } catch(err) {
      return { code: 500, message: err.message || 'GET REQUEST FAILED' }
    }
  })
}

export async function POST(request) {
  const params = await request.json()
  
  return await processRequest(request, async (action, subAction) => {
    try {
      const res = await axios.post(`${apiUrl}/${action}/${subAction}`, params)
      return res.data
    } catch(err) {
      return { code: 500, message: err.message || 'POST REQUEST FAILED' }
    }
  })
}