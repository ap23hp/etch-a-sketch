const containerDiv = document.querySelector(".container");
const btnNum = document.querySelector(".btn");

btnNum.addEventListener("click", function () {
  containerDiv.innerHTML = "";
  let result;
  do {
    result = parseInt(prompt("Enter number between 16 and 100"));
  } while (isNaN(result) || result < 16 || result > 100);

  let itemwidth = `${660 / result}px`;
  let itemHeight = `${500 / result}px`;

  for (let i = 0; i < result * result; i++) {
    let divv = document.createElement("div");
    divv.className = "item";

    divv.style.width = itemwidth;
    divv.style.height = itemHeight;
    divv.setAttribute("data-hover-count", 0);

    containerDiv.appendChild(divv);
        let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
    divv.addEventListener("mouseenter", function () {
      count = parseInt(divv.getAttribute("data-hover-count"));
     if (count === 0) {

let randomColor=`rgb(${r},${g},${b})`
//         let randomColor = `rgb(
//   ${Math.floor(Math.random() * 256)},
//   ${Math.floor(Math.random() * 256)},
//   ${Math.floor(Math.random() * 256)}
// )`;
        divv.style.backgroundColor = randomColor;
           count++;
    }
     if (count > 0 && count < 10) {
       divv.setAttribute("data-hover-count", count);
     //  divv.style.opacity = 1 - count * 0.1;
        divv.style.backgroundColor = `rgba(${r=r-25},${g=g-25},${b=b-25})`;
      }
    });
  }
});
