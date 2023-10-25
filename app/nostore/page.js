// Dynamic Data Fetching or Server Side Rendering
async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" }
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSessions()
  return (
    <div>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      {data.sessions.map((data, i) => (
        <h1>{`data item -- ${i}`}</h1>
      ))}
    </div>
  )
}
