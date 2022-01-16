export async function getPOTD() {
  let res = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NEXT_PUBLIC_API_KEY, {mode:'cors'});
  let data = await res.json()
  return data
}

export async function getSearch(query, page) {
  if (page) query += '&page=' + page;
  let res = await fetch('https://images-api.nasa.gov/search?q=' + query);
  let data = await res.json();
  return data
}

export async function getSearchImage(url) {
  let res = await fetch(url, {mode:'cors'})
  let data = await res.json();
  return data[0]
}