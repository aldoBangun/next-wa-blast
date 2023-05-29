const fetchData = async () => {
  const res = await fetch('http://localhost:3000/api?path=media&dest=getMedia')
  return res.json()
}

export default async function Blast() {
  const data = await fetchData()
  return <>
    <h1>Blast Page</h1>
    {data.message}
  </>
}