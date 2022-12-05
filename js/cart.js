/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const rows = document.querySelectorAll("tbody");
  for (const cell of rows){
    cell.innerText = "";
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
const tbody=document.querySelector('tbody');


  // TODO: Iterate over the items in the cart
  for (let i=0; i < state.cart.items.length; i++){
  // TODO: Create a TR
  let tr = document.createElement("tr");
  // TODO: Create a TD for the delete link, quantity,  and the item
  let htmlProduct = document.createElement("td");
 htmlProduct.innerText = state.cart.items[i].product;
 let htmlQuantity = document.createElement("td");
 htmlQuantity.innerText = state.cart.items[i].quantity;
 let htmlDelete=document.createElement("td");
 htmlDelete.innerHTML = `<a href = "" id="del-${i + 1}">X</a>`;
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tr.appendChild(htmlDelete);
  tr.appendChild(htmlQuantity);
  tr.appendChild(htmlProduct);
  tbody.appendChild(tr);
}
}

function removeItemFromCart(event) {
event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  const idx = parseInt(event.target.id.split('-')[1]);
  console.log(idx);
  console.log(event.target.id);

  const row = document.querySelectorAll('tr')[idx];
  console.log(row.innerHTML);
  const productName = row.textContent.split('\t')[2];
  row.innerHTML = '';
  // TODO: Save the cart back to local storage
  state.cart.removeItem(productName);
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
