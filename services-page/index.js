function addWorkCard(params) {
  const template = document.querySelector("#template__portfolio");
  const container = document.querySelector(".container-services");
  template.content.querySelector(".card__title").textContent = params.title;
  template.content.querySelector(".card__parrafo").textContent =
    params.description;
  template.content.querySelector(".card__link").textContent = params.link;
  template.content.querySelector(".card__img").src = params.img;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolioInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/yyhq41s3erjd/environments/master/entries?access_token=_Hc-tpFKueBLH2b7qRnh3mfTgUo8irfEfESbhkfreT8&content_type=servicesPortfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        let src = "";
        data.includes.Asset.filter((res) => {
          if (res.sys.id == item.fields.portfolioImage.sys.id) {
            src = res.fields.file.url;
          }
        });

        return {
          title: item.fields.portfolioTitle,
          description: item.fields.portfolioDescription,
          img: src,
          link: item.fields.portfolioLink,
        };
      });
      return fieldsCollection;
    });
}
function main() {
  footerComp(document.querySelector(".footer"));
  headerComp(document.querySelector(".header"));
  getPortfolioInfo().then((port) => {
    for (const p of port) {
      addWorkCard(p);
    }
  });
}

main();
