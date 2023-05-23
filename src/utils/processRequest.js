import { NextResponse } from 'next/server'
import * as config from '@/utils/apiRoutes'

function getRoute(request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path')
  const destRoute = searchParams.get('dest')

  return new Promise((resolve, reject) => {
    const configPath = config[path]
    if (!configPath) return reject(new Error(`Path "${path}" does not exists!`))

    const configDestRoute = configPath[destRoute]
    if (!configDestRoute) return reject(new Error(`Route "${destRoute}" does not exists!`))

    const { action, subAction } = configDestRoute
    resolve({ action, subAction })
  })
}

function processRequest(request, callback) {
  return new Promise(async (resolve) => {
    try {
      const { action, subAction } = await getRoute(request)
      const res = await callback(action, subAction)

      resolve(NextResponse.json(res.data))
    } catch(err) {
      resolve(NextResponse.json({
        code: -1,
        message: err?.data?.message || err?.message || 'Something error on backend',
        content: null
      }))
    }
  })
}

export default processRequest