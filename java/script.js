var menuBar = document.querySelector(".menu-mobile") // menu

menuBar.addEventListener("click", () =>{
   let menuMobile = document.querySelector(".menu-mobile ul")
   if(menuMobile.classList.contains("show-menu")){
    menuMobile.classList.remove("show-menu") 
   } else {
    menuMobile.classList.add("show-menu") 
   }     
})

let time = 2000, //slider imagem
   currentImageIndex= 0,
   images = document.querySelectorAll(".slide img")
   max = images.length;

   function nextImage(){

      images[currentImageIndex]
      
      .classList.remove("selected")

      currentImageIndex++

      if (currentImageIndex >= max)

         currentImageIndex = 0

      images[currentImageIndex]

      .classList.add("selected")
   }
   function start () {

      setInterval(() =>{

      nextImage()

      }, time)
   }

   window.addEventListener("load", start)