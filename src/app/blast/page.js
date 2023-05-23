const fetchData = async () => {
  const res = await fetch('api/hello')
  await res.json()
}

export default async function Blast() {
  const data = await fetchData()
  return <>
    <h1>Blast Page</h1>
    {data.message}
  </>
}