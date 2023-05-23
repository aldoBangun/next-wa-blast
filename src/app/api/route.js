import processRequest from '@/utils/processRequest'

const apiUrl = `http://${process.env.API_HOST}:${process.env.API_PORT}`

export async function GET(request) {
  return await processRequest(request, async (action, subAction) => {
    const res = await fetch(`${apiUrl}/${action}/${subAction}`)
    return await res.json()
  })
}

export async function POST(request) {
  const params = await request.json()
  
  return await processRequest(request, async (action, subAction) => {
    const res = await fetch(`${apiUrl}/${action}/${subAction}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ params })
    })

    return await res.json()
  })
}