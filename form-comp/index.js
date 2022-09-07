function contactForm(el) {
  const form = document.createElement("div");
  form.innerHTML = `
        <div class= "contact">
            <h3 class="form-title">Escribime</h3>
            <div class="container-form">
                <form class=formulario>
                    <input placeholder="Name" class="input" type="text" name="name">
                    <input placeholder="Email" class="input" type="email" name="email">
                    <textarea placeholder="Message" class="textarea" type="textarea" name="textarea"></textarea>
                    <div>
                    <button class="submit-form">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    
    
    `;


    
  el.appendChild(form);
}
