const createContactTab = (() => {
  let tabsContainer = document.getElementById("tabs-container");
  let contactBtn = document.createElement("button");

  contactBtn.id = "contact";
  contactBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
  contactBtn.textContent = "Contact"
  tabsContainer.appendChild(contactBtn);
  contactBtn.onclick = contactInsertContent;
});

const contactInsertContent = (() => {
   let contentDiv   = document.getElementById("content");
   let modalDisplay = document.getElementById("tabs-modal-display")
   let oldModal     = modalDisplay.firstChild
   let contactInfo  = document.createElement("div");
   let address      = document.createElement("p")
   let phoneNumber  = document.createElement("p");

   contactInfo.id = "modal-contact"
   contentDiv.style.display ="none"
   modalDisplay.style.display ="contents"

   contactInfo.setAttribute("style","height:100vh; width:100vw; background-color: #693003b8; text-align:center;");
   address.setAttribute("style", "padding: 2em; color: beige;");
   address.textContent = "1234 Pasta Blvd, Bologna City, Anywhere";
   phoneNumber.setAttribute("style", "padding: 2em; color: beige;");
   phoneNumber.textContent = "1-800-wah-zahhhhhh";

   if(modalDisplay.firstChild){
     modalDisplay.removeChild(oldModal);
     modalDisplay.appendChild(contactInfo);
     contactInfo.appendChild(address);
     contactInfo.appendChild(phoneNumber);
   } else if(modalDisplay.firstChild === null){
     modalDisplay.appendChild(contactInfo);
     contactInfo.appendChild(address);
     contactInfo.appendChild(phoneNumber);
     };
});

export { createContactTab };
