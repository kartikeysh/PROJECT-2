const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let emj = document.getElementById("emj");
console.log(emj);
const arr = ["&#128513;","&#128516;;","&#128512;","&#128514;"]
var cont = 0;
let getJoke = () => {
   console.log(cont)
    if(cont>3)
    {
        cont = 0;
    }
    
    emj.innerHTML = arr[cont];
    console.log(emj.innerHTML)
    cont ++;    
    jokeContainer.classList.remove("active");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent =`${item.joke}`;
        jokeContainer.classList.add("active");

    });
}
btn.addEventListener("click",getJoke);
getJoke();
 