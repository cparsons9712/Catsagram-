    const API_URL = `https://api.thecatapi.com/v1/images/search`
    const API_KEY = 'live_aDykoMBG2GYg3h2mW3fCcmLUzOq0ZjeEYfTaxdjhmmTQ8Kr163W6JxSoFG3HdKAo'


    let currentImageToVoteOn;
  let karma = 0;
  let commentlist = [];
window.onload = () =>{

    let ele = document.createElement('h1')
    ele.innerText = 'Kitten Pic'
    document.body.append(ele)

    let imgCon = document.createElement('div');
    imgCon.className = 'image-container';
    document.body.append(imgCon)

    let counter = document.createElement("div");
    counter.className = "karmaDiv"
    counter.innerText =`Karma: ${karma}`
    document.body.append(counter)

    let changeImg = document.createElement('button')
    changeImg.className = 'change-image'
    changeImg.innerText = 'Change Image'
    changeImg.addEventListener("click", grab)
    document.body.append(changeImg)

    //html input field type text
    let inputComment = document.createElement('input')
    inputComment.setAttribute ("type", "text")
    document.body.append(inputComment)


    let submitPost = document.createElement('button')
    submitPost.className = 'submit-post'
    submitPost.innerText = 'Submit Post'
    document.body.append(submitPost)
    submitPost.addEventListener("click", () => {
      let field = document.querySelector('input')
      commentlist.push(field)
      console.log(commentlist, "COMMENT LIST")
    })

    let imgComments =document.createElement('ul');
    imgComments.className = 'comment-list'
    for(let i = 0; i < commentlist.length; i++){
      let li = document.createElement('li');
      li.innerText = commentlist[i];
      imgComments.append(li);
    }


    let upVote = document.createElement('button')
    upVote.className = 'upvote'
    upVote.innerText = 'Upvote'
    upVote.addEventListener("click", ()=> {
      console.log(karma, ':Karma1')
      upvoteThis()
      console.log(karma, ':Karma2')
    })
    document.body.append(upVote)
    let downVote = document.createElement('button')
    downVote.className = 'downvote'
    downVote.innerText = 'Downvote'
    downVote.addEventListener("click", downvote)
    document.body.append(downVote)

    grab()
// changeImg : should run the showCat function
// Upvote : add + to counter
// downvote : decrement - from counter
// submit : submits a coment to an image
// something to display the popularity score
}
function grab ()  {
  fetch(API_URL, { headers: {'x-api-key': API_KEY}})
  .then(res => res.json())
  .then(data => {
    // reset()
    showCat(data[0].url)
    reset()
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


function reset(){
  let karm = document.querySelector(".karmaDiv")
  karma = 0;
  karm.innerHTML = `Karma: ${karma}`
}

function upvoteThis(){
  console.log(`karma: ${karma}`)
  karma = karma +1;
  // console.log(`Karma UP: ${karma}`)
  let karm = document.querySelector(".karmaDiv")
  // console.log(`karm: ${karm}`)
  karm.innerHTML = `Karma: ${karma}`


}
function downvote(){
  console.log(`karma: ${karma}`)
  karma = karma -1;
  // console.log(`Karma UP: ${karma}`)
  let karm = document.querySelector(".karmaDiv")
  // console.log(`karm: ${karm}`)
  karm.innerHTML = `Karma: ${karma}`
}

function submitComment (){

}

//first form
//form submits comment into array
