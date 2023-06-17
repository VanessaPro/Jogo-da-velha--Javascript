const startGamer = document.querySelector(".startGamer");

let defined;
let move = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  defined = [];

  startGamer.innerHTML = `JOGADOR DA VEZ: ${move}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newUpdate);
  });
}

init();

function newUpdate(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = move;
  e.target.removeEventListener("click", newUpdate);
  defined[index] = move;

  setTimeout(() => {
    consiDer();
  }, [100]);

  move = move === "X" ? "O" : "X";
  startGamer.innerHTML = `JOGADOR DA VEZ: ${move}`;
}

function consiDer(){
  let movementBegin = move === "X" ? "O" : "X";

  const items = defined
    .map((item, i) => [item, i])
    .filter((item) => item[0] === movementBegin)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + movementBegin + "' GANHOU!");
      init();
      return;
    }
  }

  if (defined.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}