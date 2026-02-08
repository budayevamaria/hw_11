const circle = document.querySelector(".circle");
const square = document.querySelector(".square");
const circleBtn = document.querySelector(".btn-circle");
const squareBtn = document.querySelector(".btn-square");
const deleteBtn = document.querySelector(".btn-delete");
const errorMsg = document.querySelector("p.error");
const btnContainer = document.querySelector(".btn-container");

const colors = [
  {
    title: "purple",
    hex: "#efc7fe",
  },
  {
    title: "blue",
    hex: "#c5defc",
  },
  {
    title: "yellow",
    hex: "#fcefa4",
  },
  {
    title: "red",
    hex: "#ffc3d6",
  },
];

let currentShape = null;

circleBtn.addEventListener("click", function () {
  circle.classList.remove("hide");
  square.classList.add("hide");
  errorMsg.textContent = "";
  currentShape = circle;
  circle.style.backgroundColor = "#fff";
});

squareBtn.addEventListener("click", function () {
  square.classList.remove("hide");
  circle.classList.add("hide");
  errorMsg.textContent = "";
  currentShape = square;
  square.style.backgroundColor = "#fff";
});

deleteBtn.addEventListener("click", function () {
  currentShape.classList.add("hide");
  currentShape.style.backgroundColor = "#fff";
  currentShape = null;
});

colors.forEach(color => {
  const btn = document.createElement("button");
  btn.classList.add("btn-color");
  btn.textContent = `Change color to ${color.title}`;
  btn.style.backgroundColor = color.hex;

  btn.addEventListener("click", function () {
    if (currentShape) {
      currentShape.style.backgroundColor = color.hex;
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Select a shape first";
    }
  });

  btnContainer.insertBefore(btn, deleteBtn);
});
