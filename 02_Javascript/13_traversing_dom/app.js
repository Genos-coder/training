// console.log("This is js traversing test");
const container = document.querySelector(".container");

// console.log(container.childNodes);
// console.log(container.children);

const nodeType = container.childNodes[0].nodeType;
const nodeName = container.childNodes[0].nodeName;
const parentNode = container.childNodes[0].parentNode;
console.log(nodeType, nodeName, parentNode);

console.log(container.children[0].firstChild);
console.log(container.children[0].firstElementChild);
console.log(container.children[0].lastChild);
console.log(container.children[0].lastElementChild);
console.log(container.children[0].nextSibling);
console.log(container.children[0].nextElementSibling);
console.log(container.children[0].nextElementSibling.parentNode);
