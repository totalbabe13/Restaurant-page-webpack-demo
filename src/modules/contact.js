const createContactTab = (() => {
  // alert('inside contact ')
  let tabsContainer = document.getElementById("tabs-container");
  let contactBtn = document.createElement("button");
  contactBtn.id = "contact";
  contactBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
  contactBtn.textContent = "Contact"
  tabsContainer.appendChild(contactBtn);
  contactBtn.onclick = contactInsertContent;
});

const contactInsertContent = (() => {
   let contactModal = document.createElement("div");
   let contentDiv = document.getElementById("content");
   let address = document.createElement("p")
   let phoneNumber = document.createElement("p");

   contactModal.id = "modal-contact"
   contentDiv.style.display ="none"

   contactModal.setAttribute("style","height:100vh; width:100vw; background-color: #693003b8; text-align:center;");
   address.setAttribute("style", "padding: 2em; color: beige;");
   address.textContent = "1234 Pasta Blvd, Bologna City, Anywhere";
   phoneNumber.setAttribute("style", "padding: 2em; color: beige;");
   phoneNumber.textContent = "1-800-wah-zahhhhhh";

   document.body.insertBefore(contactModal,contentDiv);
   contactModal.appendChild(address);
   contactModal.appendChild(phoneNumber);

});



export { createContactTab };
