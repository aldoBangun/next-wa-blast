import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

export async function GET(req) {
  const token = await getToken({ req, secret })
  const { offset, limit } = new URL(req.url)

  const res = await fetch(`http://localhost:5500/users?${new URLSearchParams({ offset, limit })}`, {
    headers: new Headers({ 
      'Authorization': token.accessToken, 
      'Content-Type': 'application/x-www-form-urlencoded'
    }), 
  })
  const data = await res.json()

  return NextResponse.json(data)
}