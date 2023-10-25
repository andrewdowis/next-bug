// Static data fetching with revalidation
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: { revalidate: 20 } }
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSpeakers()

  return (
    <div>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      {data.speakers.map((data, i) => (
        <h1>{`data item -- ${i}`}</h1>
      ))}
    </div>
  )
}
