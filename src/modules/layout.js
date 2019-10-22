
const testLayout = (() => {

   document.body.setAttribute("background","rest_home.jpeg");
   let contentDiv = document.getElementById('content')
   contentDiv.setAttribute("style", "width: 50%; margin: auto;")

   let tabsContainer = document.createElement("div")
   tabsContainer.id = "tabs-container"
   tabsContainer.setAttribute('style', "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; height: 30px; background-color: #ffbc7cc7;")
   document.body.insertBefore(tabsContainer,contentDiv);

   // let contactBtn = document.createElement("button")
   // contactBtn.id = "contact"
   // contactBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
   // // contactBtn.setAttribute("onclick","aFunction(?)")
   // contactBtn.textContent = "Contact"

   // let menuBtn    = document.createElement("button")
   // menuBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
   // menuBtn.textContent = "Menu"
   //
   // let aboutBtn   = document.createElement("button")
   // aboutBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
   // aboutBtn.textContent = "About"
   //
   // let reservBtn  = document.createElement("button")
   // reservBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
   // reservBtn.textContent = "Reservations"

   // tabsContainer.appendChild(contactBtn);
   // tabsContainer.appendChild(menuBtn);
   // tabsContainer.appendChild(aboutBtn);
   // tabsContainer.appendChild(reservBtn);


   let header = document.createElement("h1");
   header.textContent = "Welcome to Soup D'jour!"
   header.setAttribute("style", "width: 100vw; background-color: #f2794478; color: white; font-family: cursive; font-size: 3em; text-align: center;")
   document.body.insertBefore(header,contentDiv);

   let infoParagraph = document.createElement("p");
   infoParagraph.setAttribute("style", "font-size: 22px; font-family: sans-serif; background-color: #f2894487; color: white; text-align: justify;")
   infoParagraph.textContent = "Hello Soup Lovers! Soup D'jour is your home for sustainable, fresh from the farm, locally sourced, organic and non-gmo made soup! We pride ourselves in finding the most flavourful in season ingredients and deliverying them to your table for you and yours. Please join us in supporting our local farmers, and invite your friends. You'll feel as fresh as the food in front of you!"
   contentDiv.appendChild(infoParagraph)
})
export {testLayout};
