// ITERATION 1
function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector(".subtotal span");

  let calculateSubtotal = price * quantity;

  subtotal.innerHTML = calculateSubtotal;

  return calculateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  for (item of products) {
    updateSubtotal(item);
  }

  // ITERATION 3
  const totalPriceElement = document.querySelector('#total-value span');
  const partialPrices = document.querySelectorAll('.subtotal span');
  let totalPrice = 0;
  for (item of partialPrices) {
    totalPrice = totalPrice + parseInt(item.innerText);
  }
  
  totalPriceElement.innerText = totalPrice;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
}


// ITERATION 5

function createProduct() {

  const newProductName = document.querySelector('.create-product input[type="text"]');
  const newProductPrice = document.querySelector('.create-product input[type="number"]');

  const newProduct = document.createElement('tr');


  newProduct.classList.add('product');
  newProduct.innerHTML = `<td class="name">
  <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
      <button class="btn btn-remove">Remove</button>
  </td>`;

  document.querySelector('tbody').appendChild(newProduct);

  newProductName.value = '';
  newProductPrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');  
  for (item of removeButtons) {
   item.addEventListener('click', removeProduct);
  }

  const creatButton = document.getElementById('create');
  creatButton.addEventListener('click', createProduct);

  //... your code goes here
});
