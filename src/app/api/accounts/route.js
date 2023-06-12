import { NextResponse } from 'next/server'
import axios from '@/utils/axiosInstance'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')
  const session = await getServerSession(authOptions)

  const response = await axios.post('Accounts/lists', {
    offset,
    limit,
    sessionUsername: session?.user?.username
  })

  return NextResponse.json(response.data)
}