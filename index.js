

function openMenu(){
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
function templatePortfolio(arrayData){
  const container = document.querySelector(".container-card-project");
  const template = document.querySelector("#template-proyectos");
  const containerProject = document.querySelector(".container-project");

  const imageEl = template.content.querySelector(".image-project");
  const titleEl = template.content.querySelector(".title-project");
  const descriptionEl = template.content.querySelector(
    ".p-project"
  );

  const pageElement = template.content.querySelector(".project-a");
  console.log(pageElement);
  const gitElement = template.content.querySelector(".github");

  for(const obj of arrayData){
    const url = obj.link;
    const trimeado = url.split(" ");
    const webLink = trimeado[0];
    const githubLink = trimeado[1];
    console.log(webLink);

    imageEl.setAttribute("src", obj.imagenUrl)
    pageElement.setAttribute("href", webLink)
    gitElement.setAttribute("href", webLink)
    titleEl.textContent = obj.titulo;
    descriptionEl.textContent= obj.description;

    let clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  
}

function importData(){
    fetch(
      "https://cdn.contentful.com/spaces/yyhq41s3erjd/environments/master/entries?access_token=_Hc-tpFKueBLH2b7qRnh3mfTgUo8irfEfESbhkfreT8&content_type=servicesPortfolio"
    ).then((res)=>{
      return res.json();
    }).then((r)=>{
      const data = r.items.map((obj)=>{
        return {
          titulo: obj.fields.portfolioTitle,
          description: obj.fields.portfolioDescription,
          link: obj.fields.portfolioLink,
          github: obj.fields.githubLink,
          includes:r.includes.Asset.find((inc) => {
            const img = inc.sys.id == obj.fields.portfolioImage.sys.id;
            console.log(img)
            return img;
          }),
        }
      })
      data.forEach((obj)=>{
        obj.imagenUrl = "https:" + obj.includes.fields.file.url;
        delete obj.includes;
        console.log(obj);
      })
      templatePortfolio(data);
    })

    
}

function formulario(){
  const form = document.querySelector(".formulario");
  const button = document.querySelector(".submit-form");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.textarea.value;
    console.log(e.target.textarea.value);

    if(!email|| !name || !message ){
      button.classList.toggle("error");
      button.textContent = "faltan completar algunos campos";
      setTimeout(()=>{
        button.textContent = "Enviar";
        button.classList.toggle("error");
      }, 3000);
    }else{
      const data = {
        to:email,
        mess: `${name} te ha enviado un mensaje: ${message}`
      }
      fetch("https://apx-api.vercel.app/api/utils/dwf",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"content-type": "application/json"}
      }).then((res)=>{
        res.json().then(()=>{
          setTimeout(()=>{
            button.textContent = "mensaje enviado"
          },3000)
        })
      })
      setTimeout(() => {
        button.textContent = "Enviar";
      }, 7000);
    }
  })
}

function main() {
  openMenu();
  importData();
  contactForm(document.querySelector(".form"));
  formulario();
  footerComp(document.querySelector(".footer"));

  
}

main();
