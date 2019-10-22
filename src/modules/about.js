const createAboutTab = (() => {
  let tabsContainer = document.getElementById("tabs-container");
  let aboutBtn = document.createElement("button");
  aboutBtn.id = "about";
  aboutBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
  aboutBtn.textContent = "About"
  tabsContainer.appendChild(aboutBtn);
  aboutBtn.onclick = insertContent;
});

const insertContent = (() => {
   let contentDiv   = document.getElementById("content");
   let modalDisplay = document.getElementById("tabs-modal-display")
   let oldModal     = modalDisplay.firstChild
   let aboutModal   = document.createElement("div");
   let infoBlurb    = document.createElement("p");

   aboutModal.id = "modal-about"
   contentDiv.style.display ="none"
   modalDisplay.style.display ="contents"

   infoBlurb.textContent = "Soup D'jour is a run by a giant family of rabbits who believe, you should always eat your vegetables and finish your food."
   infoBlurb.setAttribute("style", "padding: 2em; color: beige;");
   aboutModal.setAttribute("style","height:100vh; width:100vw; background-color: #693003b8; text-align:center;");

   if(modalDisplay.firstChild){
     modalDisplay.removeChild(oldModal);
     modalDisplay.appendChild(aboutModal);
     aboutModal.appendChild(infoBlurb);
   } else if(modalDisplay.firstChild === null){
       modalDisplay.appendChild(aboutModal);
       aboutModal.appendChild(infoBlurb);
     };
});

export { createAboutTab }
