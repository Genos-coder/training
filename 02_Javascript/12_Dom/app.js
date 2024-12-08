//How to select an element

const container = document.getElementsByClassName("container");

// console.log(container);

for (let item of container) {
  //   console.log(item);
}

//selects all the p tag in document
const allParagraphs = document.getElementsByTagName("p");

// console.log(allParagraphs);

for (let p of allParagraphs) {
  //   console.log(p.innerHTML);
}

const elementWithId = document.getElementById("testId");

// console.log(elementWithId);

const queryElement = document.querySelector(".card");

// console.log(queryElement);

const queryAllElements = document.querySelectorAll(".product");

// console.log(queryAllElements);
for (let product of queryAllElements) {
  //   console.log(product);
}

const allProducts = document.getElementsByClassName("product");

for (let product of allProducts) {
  // console.log(product);
}
Array.from(allProducts).forEach((item) => {
  // console.log(item);
});

//Adding and deleting elements

const h2Elem = document.createElement("h2");
const h2TextNode = document.createTextNode(
  "There will be no start if you don't start right now"
);

h2Elem.appendChild(h2TextNode);

queryElement.appendChild(h2Elem);

// console.log(queryElement.getAttribute("class"));
h2Elem.setAttribute("id", "slogan");

const testingArt = document.querySelector("#test");

testingArt.removeAttribute("id");
//Replacing the child

const testing2 = document.querySelector("#test2");
const newChild = document.createElement("pre");
newChild.innerHTML = "This is a sample h2TextNode     will cause difference";
const childToBeReplaced = document.getElementById("child");
testing2.replaceChild(newChild, childToBeReplaced);
testing2.appendChild(newChild);

testing2.removeChild(newChild);

testing2.remove();
