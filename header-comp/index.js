function headerComp(el) {
  const header = document.createElement("div");
  header.innerHTML = `
        <header class="header">
            <div class="container-logo">
              <div class="links">
              <a href="" class="links">Portfolio</a>
              <a href="./services-page/index.html" class="links">Servicios</a>
              <a href="./contact-page/index.html" class="links">Contacto</a>
              </div> 
            </div>
            <button class="abre">Menu</button>
            <div class="menu">
            <button class="cierra-ventana">X</button>
            <a href="" class="links">Portfolio</a>
            <a href="./services-page/index.html" class="links">Servicios</a>
            <a href="./contact-page/index.html" class="links">Contacto</a>
            </div>
        </header>
    
    
    `;
  el.appendChild(header);

  const menu = document.querySelector(".menu");
  const buttonCierre = document.querySelector(".cierra-ventana");
  const button = document.querySelector(".abre");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "flex";
  });

  buttonCierre.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "";
  });
}
