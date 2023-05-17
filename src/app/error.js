'use client'

export default function Error({ error, restart }) {
  return <>
    <div>{error}</div>
    <button className="btn btn-primary" onClick={restart}>Restart</button>
  </>
}