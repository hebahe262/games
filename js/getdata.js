
import {displayGames, showLoading,hideLoading} from"./displaygames.js"
const apiKey='cf6527df08mshf1c65137b8a1e32p186605jsn78674e1d8d90';
const api = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg';

let catagory = document.querySelector(".catagory")
   let imgsgm=document.querySelector (".imgsgm")
    let key=document.querySelector(".key")
let description=document.querySelector(".description")

let platform =document.querySelector(".platform")
let status = document.querySelector(".status")
let more = document.querySelector(".more")
// import { showLoading , hideLoading } from "./displaygames.js";
export async function getgames(){
    showLoading();
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cf6527df08mshf1c65137b8a1e32p186605jsn78674e1d8d90',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
	const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options);

if(response.ok){
    const res = await response.json();
    console.log(res);
    displayGames(res);
   
}

else{

}

}
hideLoading();
// ==========================================>
const apiKeyyy='cf6527df08mshf1c65137b8a1e32p186605jsn78674e1d8d90';
const apiurl = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';



 export async function lionGames(id) {
    showLoading();

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cf6527df08mshf1c65137b8a1e32p186605jsn78674e1d8d90',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    if(response.ok){
        const res = await response.json();
        console.log(res);

        catagory.innerHTML= res.genre;
        description.innerHTML=res.description;
        key.innerHTML=res.title;
        imgsgm.innerHTML=res.thumbnail;
        imgsgm.setAttribute("src",`${res.thumbnail}`)

        platform.innerHTML=res.platform;
        status.innerHTML=res.status;
        more.setAttribute("href", `${res.game_url}`)
    
       
    }
    else{
     
  
    }
    hideLoading();
}


//  const play =document.getElementById("card");

//  play.addEventListener("click",function(){
//     lionGames(play.value)
// })


// ==================================




export async function getCategory(category) {
    
showLoading();
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a57dbf9258mshec4394e6d8fd288p132018jsn696aeecaa4eb',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options );

if (response.ok) {
const res = await response.json();
console.log(res);
displayGames(res);
hideLoading();

}
hideLoading();

}

const listItems =document.querySelectorAll("a")
for (let i = 0; i< listItems.length; i++) {
  listItems[i].addEventListener("click",function(e){
    getCategory(e.currentTarget.id)
  }

)

    }




// =================    // 

