const elements = document.getElementsByClassName("grp-item");
const sbBgImgElement = document.querySelector(".sbBgImg");

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  let elementImageUrl = element.getElementsByTagName("img")[0].src;

  element.addEventListener("mouseover", function () {
    sbBgImgElement.style.backgroundImage = `url('${elementImageUrl}')`;
    sbBgImgElement.classList.add("active");

    element.classList.add("active");
  });

  element.addEventListener("mouseout", function () {
    sbBgImgElement.classList.remove("active");   

    element.classList.remove("active");
  });
}
