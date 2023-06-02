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
  target.parentNode.removeChild();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here\

  
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
  createButtons.addEventListener("click", createProduct)
});
