const productEl = document.getElementById("product");
const quantityEl = document.getElementById("quantity");

const getProduct = () => {
  const product = productEl.value;
  const quantity = quantityEl.value;

  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.append(li);

  setToCart(product,quantity);

  product.value = "";
  quantity.value = "";
};

const getCart = () => {
    const cart = {};
    return cart;
}

const setToCart = (product,quantity) => {
    const cart = getCart();
    cart[product] = quantity;
    console.log(cart);
}
