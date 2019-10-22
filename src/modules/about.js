const createAboutTab = (() => {
  // alert('inside contact ')
  let tabsContainer = document.getElementById("tabs-container");
  let aboutBtn = document.createElement("button");
  aboutBtn.id = "about";
  aboutBtn.setAttribute("style","border:0px; background-color: #ffe4c42e;")
  aboutBtn.textContent = "About"
  tabsContainer.appendChild(aboutBtn);
  // aboutBtn.onclick = test;
});


export { createAboutTab }
