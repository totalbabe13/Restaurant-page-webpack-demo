
const testLayout = (() => {

   document.body.setAttribute("background","rest_home.jpeg");
   let contentDiv = document.getElementById('content')
   contentDiv.setAttribute("style", "width: 50%; margin: auto;")

   let tabsContainer = document.createElement("div")
   tabsContainer.id = "tabs-container"
   tabsContainer.setAttribute('style', "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; height: 30px; background-color: #ffbc7cc7;")
   document.body.insertBefore(tabsContainer,contentDiv);

   let header = document.createElement("h1");
   header.textContent = "Welcome to Soup D'jour!"
   header.setAttribute("style", "width: 100vw; background-color: #f2794478; color: white; font-family: cursive; font-size: 3em; text-align: center;")
   document.body.insertBefore(header,contentDiv);

   let infoParagraph = document.createElement("p");
   infoParagraph.setAttribute("style", "font-size: 22px; font-family: sans-serif; background-color: #f2894487; color: white; text-align: justify;")
   infoParagraph.textContent = "Hello Soup Lovers! Soup D'jour is your home for sustainable, fresh from the farm, locally sourced, organic and non-gmo made soup! We pride ourselves in finding the most flavourful in season ingredients and deliverying them to your table for you and yours. Please join us in supporting our local farmers, and invite your friends. You'll feel as fresh as the food in front of you!"
   contentDiv.appendChild(infoParagraph);

   let tabsModal = document.createElement("div")
   tabsModal.id = "tabs-modal-display"
   tabsModal.style.display ="none"
   document.body.insertBefore(tabsModal, contentDiv)

})
export {testLayout};
