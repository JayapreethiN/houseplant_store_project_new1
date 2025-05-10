let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartIcon() {
  const header = document.getElementById('main-header');
  if (header) {
    header.innerHTML = `
      <a href="products.html">Products</a> |
      <a href="cart.html">Cart (<span id="cart-count">${cart.length}</span>)</a>
    `;
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let totalItems = 0;
  let totalCost = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${item.img}" width="50"> ${item.name} - $${item.price}
      <button onclick="changeQty(${index}, 1)">+</button>
      <button onclick="changeQty(${index}, -1)">-</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    container.appendChild(div);
    totalItems++;
    totalCost += item.price;
  });

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-cost').textContent = totalCost;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function changeQty(index, delta) {
  if (delta === 1) {
    cart.push(cart[index]);
  } else if (delta === -1) {
    cart.splice(index, 1);
  }
  renderCart();
  updateCartIcon();
}

function deleteItem(index) {
  cart.splice(index, 1);
  renderCart();
  updateCartIcon();
}

function checkout() {
  alert('Checkout Coming Soon!');
}

renderCart();
updateCartIcon();