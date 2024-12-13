const selectedItems = document.querySelectorAll(".selected");
const droppingArea = document.querySelector(".dropping-area");
let selected = null;

for (let item of selectedItems) {
  item.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
}
droppingArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

droppingArea.addEventListener("drop", dropItem);

function dropItem() {
  console.log(this);
  console.log(selected);
  this.appendChild(selected);
}
