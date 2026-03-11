const product = document.getElementById("product");
const quantity = document.getElementById("quantity");

const getProduct = () => {
  const productValue = product.value;
  const quantityValue = quantity.value;

  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${productValue} : ${quantityValue}`;
  productContainer.append(li);

  product.value = "";
  quantity.value = "";
};
