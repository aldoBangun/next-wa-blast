import processRequest from '@/utils/processRequest'
import axios from '@/utils/axiosInstance'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]/route'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')
  const session = await getServerSession(authOptions)

  return await processRequest(request, async (action, subAction) => {
    try {
      const res = await axios.post(`/${action}/${subAction}`, {
        offset,
        limit,
        sessionUsername: session?.user?.username
      })
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
      const res = await axios.post(`/${action}/${subAction}`, params)
      return res.data
    } catch(err) {
      return { code: 500, message: err.data.message || 'POST REQUEST FAILED' }
    }
  })
}