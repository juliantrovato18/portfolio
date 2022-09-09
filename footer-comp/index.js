function footerComp(el) {

  el.innerHTML = `
        <div class="footer">
          <h3 class="footer-title">Julian</h3>
            <div class="container-social">
                <div class="social-links">
                <a href="https://www.linkedin.com/in/juliantrovato/" class="footer-pe">Linkedin</a>
                <img class="footer-img" src="./img/linkedin.png" />
                </div>
                <div class="social-links">
                <a href="https://www.github.com/juliantrovato18" class="footer-pe">Github</a>
                <img class="footer-img" src="./img/github.png" />
                </div>
            </div>
        </div>    
    `;
  el.appendChild(footer);
}
