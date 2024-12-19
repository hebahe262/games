import { getgames,getCategory } from "./getdata.js";
import { clos } from "./ditails.js";
let closeIcon = document.querySelector("#closeIcon")




getgames();
closeIcon.addEventListener("click", clos)
// import{lionGames} from"./getdata.js"
// lionGames();


getCategory();

// import{showLoading,hideLoading}from"./displaygames.js"



const navContainer = document.querySelector(".nav-container");

navContainer.addEventListener("click", function (e) {
    
    if (e.target.classList.contains("nav-link")) {
        
        
        
        const activeLink = navContainer.querySelector(".active");
        if (activeLink) activeLink.classList.remove("active");

       
        e.target.classList.add("active");

      
        getCategory(e.target.innerHTML);
    }
});
