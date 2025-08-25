export function displayList(products) {
  // products list
  const productSection = document.querySelector(".products");
  const list = productSection.querySelector("ul");

  //   console.log(list);

  products.map((product) => {
    const productList = document.createElement("li");

    productList.innerHTML =
      product.title +
      " <a href='/produkt/1'>läs mer</a>. " +
      "Pris: " +
      product.price * 10 +
      "kr";

    // console.log(productList);

    list.appendChild(productList);
  });
}
