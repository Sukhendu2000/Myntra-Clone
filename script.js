let bagItems;
// Calling onload() function
onload();

// Defining onload() function
function onload() {
  let bagItemString = localStorage.getItem("bagItems");
  bagItems = bagItemString ? JSON.parse(bagItemString) : [];
  displayBagCount(); // Initially calling to display nothing in bag
}

// addToBag Function
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems)); // store bagItems to localStorage
  displayBagCount(); // calling and updates the count
}

// displayBagCount Function
function displayBagCount() {
  let bagItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCount.innerText = bagItems.length; // Initially bagItems array size is 0
    bagItemCount.style.visibility = "visible";
  } else {
    bagItemCount.style.visibility = "hidden";
  }
}

// displayItems Function
let displayItems = () => {
  let itemsContainerElement = document.querySelector(".items-container");

  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="button-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
};

// Calling displayItem() annonymous function
displayItems();

// let item = {
//   item_image: "Images/1.jpg",
//   rating: {
//     stars: 4.5,
//     noOfReviews: 1400,
//   },
//   company_name: "Carlton London",
//   item_name: "Rhodium Plated CZ Floral Studs",
//   current_price: 606,
//   original_price: 1045,
//   discount_percentage: 42,
// };
