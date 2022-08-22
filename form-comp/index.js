function contactForm(el) {
  const form = document.createElement("div");
  form.innerHTML = `
        <div class= "contact">
            <h3 class="form-title">Escribime</h3>
            <div class="container-form">
                <form class=formulario>
                    <label class="label">
                    <h4 class="label-p">Nombre</h4>
                    <input class="input" type="text" name="name">
                    </label>
                    <label class="label">
                    <h4 class="label-p">Email</h4>
                    <input class="input" type="email" name="email">
                    </label>
                    <label class="label">
                    <h4 class="label-p">Mensaje</h4>
                    </label>
                    <textarea class="textarea" type="textarea" name="textarea"></textarea>
                    <div>
                    <button class="submit-form">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    
    
    `;


    
  el.appendChild(form);
}
