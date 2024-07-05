let productsContainer = document.querySelector(".product-container");

window.addEventListener("load", async () => {
  let respone = await fetch(
    "https://dummyjson.com/products?limit=8&select=title,description,price,discountPercentage,thumbnail"
  );
  let myData = await respone.json();
  let products = await myData.products;
  products.forEach((product) => {
    let newPrice = (
      (product.price * (100 - product.discountPercentage)) /
      100
    ).toFixed(2);
    productsContainer.innerHTML += `<div class="product-contain">
        <div class="img-contain">
          <img src="${product.thumbnail}" />
        </div>
        <div class="product-details">
          <p class="product-details-title">${product.title}</p>
          <p class="product-details-info">
          ${product.description}          
          </p>
          <div class="product-detials-price">
            <p class="new-price">${newPrice}</p>
            <p class="old-price">${product.price}</p>
          </div>
        </div>
        <div class="product-control">
          <div class="add-product">
            <img src="./style/Bag_alt.svg" />
            <p>Add to cart</p>
          </div>
          <div class="love-product"><img src="./style/Favorite.svg" /></div>
        </div>
      </div>`;
  });
});
