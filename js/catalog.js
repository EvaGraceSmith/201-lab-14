/* global Product, Cart */

'use strict';
let form= document.getElementById('catalog')

let item= form.elements['item']
let quantity= form.elements['quantity']

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  // for (let i=0; i<state.allProducts.length; i++) <----- We are used to seeing it written like this, but below means the same thing
   for (let i in state.allProducts){
    //create an element
    const option = document.createElement('option');
    // console.log('options? ' ,option);
    //once we have the element we need to update the ??? textContent
    option.value = state.allProducts[i].name;
    option.textContent = state.allProducts[i].name;
console.log(option);
    //then how do we get it back to the page?? we need to append (append adds elements to the html)
    selectElement.appendChild(option);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  //DONE
  event.preventDefault();

  // Do all the things ...
  //DONE
  addSelectedItemToCart();

  state.cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
//DONE
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // console.log(quantity.value);
  // console.log(event.target.items.value);
  // TODO: get the quantity
  // DONE
  let items=event.target.items.value;
  let quantity=event.target.quantity.value;
  console.log(items);
  state.cart.addItem(items,quantity);
  console.log(state.cart);
// return item;
  // TODO: using tho;se, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
//DONE
function updateCounter() {
  let calculateQuantity=0;
      //create an element
      const selectElement = document.getElementById('itemCount');

      //once we have the element we need to update the ??? textContent

     for (let i in state.cart.items){
      calculateQuantity += Number(state.cart.items[i].quantity);
      console.log(state.cart.items[i].quantity);
     }
     selectElement.textContent = calculateQuantity

 }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

const itemName = document.getElementById('items').value;
const quantity =document.getElementById('quantity').value;

  // TODO: Add a new element to the cartContents div with that information

 let  addItem=document.getElementById('cartContents');
const htmlCartLocation=document.createElement('div');
htmlCartLocation.textContent=`Item: ${itemName}  Quantity: ${quantity}`;
addItem.appendChild(htmlCartLocation);
console.log(htmlCartLocation);
}
// updateCartPreview.addEventListener(CartItem);
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
