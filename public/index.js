    const API_URL = `https://api.thecatapi.com/v1/images/search`
    const API_KEY = `{'x-api-key': 'live_aDykoMBG2GYg3h2mW3fCcmLUzOq0ZjeEYfTaxdjhmmTQ8Kr163W6JxSoFG3HdKAo'}`


    let currentImageToVoteOn;

window.onload = () =>{
    let ele = document.createElement('h1')
    ele.innerText = 'Kitten Pic'

    document.body.append(ele)
    const url = `${API_URL}votes?limit=10&order=DESC`
  let grid = document.createElement('div')
  grid.className('grid')
    fetch(url,{headers: {
        'x-api-key': API_KEY
      }})
      .then((response) => {
        return response.json();
      })

    // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=apiKey
}
