import { lionGames } from "./getdata.js";

// showLoading();
 export function displayGames(list){
 
    let blackBox="";
    for (let i = 0; i < list.length; i++) {
       blackBox +=`<div data-id="${list[i].id}"  class=" heba col-md-6 col-lg-4 col-xl-3 ">
            
              <div class="card bg-transparent " >
      
                <div class=" p-3 pb-0">
                  <img src="${list[i].thumbnail}" class="card-img-top" alt="">
                </div>
      
      
                <div>
                    <div class="free d-flex justify-content-between align-items-center"style="padding: 10px;">
                      <h4 class="mb-0">${list[i].title}</h4>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                  <p class=" platform text-center .sl">${list[i].short_description.slice(1,60)}</p>
                </div>
      
      
                <div class="card-footer text-body-secondary d-flex justify-content-between">
                  <span class="badge foot">${list[i].genre} </span>
                  <span class="badge foot">${list[i].platform}</span>
                </div>
              </div>
      
      
            </div>
      `
    }
    document.getElementById("games").innerHTML=blackBox;
    


    let play =document.querySelectorAll(".heba")
  for (let i = 0; i < play.length; i++) {
   
    play[i].addEventListener("click", function (e) {

      console.log()
      document.getElementById("book").classList.remove("d-none");
      document.querySelector(".home").classList.add("d-none");
        lionGames(play[i].getAttribute("data-id"));
    })
    
  }
}
const loadingscreen =document.querySelector(".loading");

 export function showLoading(){
  loadingscreen.classList.remove("d-none");

}
export function hideLoading(){
  loadingscreen.classList.add("d-none");
}