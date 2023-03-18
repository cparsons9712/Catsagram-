    const API_URL = `https://api.thecatapi.com/v1/images/search`
    const API_KEY = 'live_aDykoMBG2GYg3h2mW3fCcmLUzOq0ZjeEYfTaxdjhmmTQ8Kr163W6JxSoFG3HdKAo'


    let currentImageToVoteOn;

window.onload = () =>{
    let ele = document.createElement('h1')
    ele.innerText = 'Kitten Pic'
    document.body.append(ele)

    let imgCon = document.createElement('div');
    imgCon.className = 'image-container';
    document.body.append(imgCon)

    grab()

  //   const url = `https://cdn2.thecatapi.com/images/9fk.jpg`
  // let grid = document.createElement('div')
  // grid.className = 'grid'
  //   fetch(url,{headers: {
  //       'x-api-key': API_KEY
  //     }})
  //     .then((response) => {
  //       return response.json();
  //     })

    // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=apiKey
}
// [{"id":"9fk","url":"https://cdn2.thecatapi.com/images/9fk.jpg","width":400,"height":306}]
function grab ()  {
  fetch(API_URL, { headers: {'x-api-key': API_KEY}})
  .then(res => res.json())
  .then(data => {
    showCat(data[0].url)
  })
  .catch(error => console.log(error))
}
function showCat(imageURL) {
  let imgContainer = document.querySelector(".image-container");
  imgContainer.innerHTML = "";
  let img = document.createElement("img")
  img.src = imageURL
  img.className = "cat-image";
  imgContainer.append(img);
}
