function footerComp(el) {
  const footer = document.createElement("div");
  footer.innerHTML = `
        <div class="footer">
        <h3 class="footer-title">Julian</h3>
            <div class="container-social">
                <div class="social-links">
                <a href="https://www.instagram.com/juliantrovato" class="footer-pe">Insta</>
                <img class="footer-img" src="../img/instagram.png" />
                </div>
                <div class="social-links">
                <a href="www.facebook.com" class="footer-pe">Linke</a>
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
