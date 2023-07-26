const productList = [
  { 
    name: "Sản phẩm A", 
    description: "Mô tả sản phẩm A", 
    price: 100, 
    Image:"img/headphone-black-walnut.webp"
  },
  { 
    name: "Sản phẩm B", 
    description: "Mô tả sản phẩm B", 
    price: 200, 
    Image:"img/headphone-black-walnut.webp"
  },
  { 
    name: "Sản phẩm C", 
    description: "Mô tả sản phẩm C", 
    price: 300, 
    Image:"img/headphone-black-walnut.webp"
  }
];

const productListElement = document.querySelector(".product-listitem");

for (let i = 0; i < productList.length; i++) {
  const product = productList[i];

  const productElement = document.createElement("div");
  productElement.classList.add("product");

  productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Giá: ${product.price} đồng</p>
      <img src="${product.Image}" alt="${product.name}">
  `;

  productListElement.appendChild(productElement);
}
