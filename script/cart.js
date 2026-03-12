const productEl = document.getElementById("product");
const quantityEl = document.getElementById("quantity");

const getProduct = () => {
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);

  displayProduct(product, quantity);

  setToCart(product, quantity);

  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }
  return cart;
};

const setToCart = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.append(li);
};
