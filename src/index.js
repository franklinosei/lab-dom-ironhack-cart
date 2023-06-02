// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here

  const priceElm = product.querySelector(".price span").innerText;
  const quantityElm = product.querySelector(".quantity input").value;
  const subtotal = Number(priceElm) * Number(quantityElm);

  const subtotalElm = product.querySelector(".subtotal span");

  subtotalElm.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  const productsCopy = [...allProducts];
  let total = 0;
  productsCopy.forEach((product) => (total += updateSubtotal(product)));

  // ITERATION 3
  const totalElm = document.querySelector("#total-value span");
  totalElm.innerText = total;
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.remove();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here\

  const newProductValues = document
    .getElementsByClassName("create-product")
    .item(0);
  const nameElm = newProductValues.querySelector(".name input");
  const priceElm = newProductValues.querySelector(".price input");

  // create new product
  const newProduct = document.createElement("tr");
  // add classname to tr
  newProduct.className = "product";

  // create td elements and add to newProduct
  const nameTrElm = document.createElement("td");
  nameTrElm.className = "name";
  nameTrElm.appendChild(document.createElement("span"));
  nameTrElm.querySelector("span").innerText = nameElm.value;

  // price tr
  const priceTrElm = document.createElement("td");
  priceTrElm.className = "price";
  priceTrElm.appendChild(document.createTextNode("$"));
  priceTrElm.appendChild(document.createElement("span"));
  priceTrElm.querySelector("span").innerText = priceElm.value;

  // quantity tr
  const quaintityTrElm = document.createElement("td");
  quaintityTrElm.className = "quantity";

  quaintityTrElm.appendChild(document.createElement("input"));
  const inputElm = quaintityTrElm.querySelector("input");
  inputElm.placeholder = "Quantity";
  inputElm.value = 0;
  inputElm.min = 0;
  inputElm.type = "number";

  // subtotal tr
  const subtotalTrElm = document.createElement("td");
  subtotalTrElm.className = "subtotal";
  subtotalTrElm.appendChild(document.createTextNode("$"));
  subtotalTrElm.appendChild(document.createElement("span"));
  subtotalTrElm.querySelector("span").innerText = 0;

  // remove button
  const removeBtnElm = document.createElement("td");
  removeBtnElm.className = "action";

  removeBtnElm.appendChild(document.createElement("button"));
  const removeButtonEle = removeBtnElm.querySelector("button");
  removeButtonEle.className = "btn btn-remove";
  removeButtonEle.innerText = "Remove";

  // add listener
  removeBtnElm.addEventListener("click", removeProduct)

  // append children to newProduct
  newProduct.appendChild(nameTrElm);
  newProduct.appendChild(priceTrElm);
  newProduct.appendChild(quaintityTrElm);
  newProduct.appendChild(subtotalTrElm);
  newProduct.appendChild(removeBtnElm);

  // get table data and append
  const tableData = document.getElementsByTagName("tbody").item(0);
  tableData.appendChild(newProduct);

  nameElm.value = "";
  priceElm.value = "";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  // remove
  const removeButtons = document.getElementsByClassName("action");
  const removeButtonsCopy = [...removeButtons];

  removeButtonsCopy.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );

  // add

  const createButtons = document.getElementById("create");
  createButtons.addEventListener("click", createProduct);
});
