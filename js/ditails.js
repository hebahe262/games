 
  const detils =document.querySelector("#book");
  let home = document.querySelector(".home")
    // console.log(detils);

 export function clos(){
    document.getElementById("book").classList.replace( "d-block"   ,"d-none");
    home.classList.replace("d-none","d-block")
  }

