function footerComp(el) {
  const footer = document.createElement("footer");


  footer.innerHTML = `
        <div class="footer2">
          <h3 class="footer-title">Julian</h3>
            <div class="container-social">
                <div class="social-links">
                <a href="https://www.instagram.com/juliantrovato" class="footer-pe">Instagram</>
                <img class="footer-img" src="../img/instagram.png" />
                </div>
                <div class="social-links">
                <a href="www.facebook.com" class="footer-pe">Linkedin</a>
                <img class="footer-img" src="../img/linkedin.png" />
                </div>
                <div class="social-links">
                <a href="https://www.github.com/juliantrovato18" class="footer-pe">Github</a>
                <img class="footer-img" src="../img/github.png" />
                </div>
            </div>
        </div>    
    `;
  el.appendChild(footer);
}
