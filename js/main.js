var elImg = document.querySelector(".inp1");
var elName = document.querySelector(".inp2");
var elPrice = document.querySelector(".inp3");
var elList = document.querySelector(".list");
function fn() {
  var carStats = [
    {
      img: elImg.value,
      name: elName.value,
      price: elPrice.value,
    },
  ];
  for (var i of carStats) {
    var newLi = document.createElement("li");
    newLi.innerHTML = `
            <img src="${i.img}" alt="${i.name}">
            <h2>${i.name}</h2>
            <p>${i.price}$</p> 
            `;
    elList.appendChild(newLi);
  }
  elImg.value = "";
  elName.value = "";
  elPrice.value = "";
}
