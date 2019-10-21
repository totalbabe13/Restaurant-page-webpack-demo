
const testLayout = (() => {

   document.body.setAttribute("background","rest_home.jpeg");

   let header = document.createElement("h1");
   header.textContent = "Welcome to Soup D'jour!"
   header.setAttribute("style", "width: 100vw; background-color: #f2794478; color: white; font-family: cursive; font-size: 3em; text-align: center;")

   document.body.appendChild(header);


})
export {testLayout};
