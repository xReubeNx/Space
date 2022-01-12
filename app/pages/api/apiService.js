const apiKey = 'U7N1jumTdNmW7yUMATR8zhHdTL9V66gXRc9B8JQj'

export async function getPOTD() {
  let res = await fetch('https://api.nasa.gov/planetary/apod?api_key=U7N1jumTdNmW7yUMATR8zhHdTL9V66gXRc9B8JQj', {mode:'cors'})
  let data = await res.json()
  return data
}