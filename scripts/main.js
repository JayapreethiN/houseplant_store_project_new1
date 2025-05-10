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

function getPlantById(id) {
  const plants = [
    { id: 1, name: 'Snake Plant', price: 15, img: 'images/plant1.jpg' },
    { id: 2, name: 'Spider Plant', price: 12, img: 'images/plant2.jpg' },
    { id: 3, name: 'Bamboo Palm', price: 18, img: 'images/plant3.jpg' },
    { id: 4, name: 'Rubber Plant', price: 20, img: 'images/plant4.jpg' },
    { id: 5, name: 'Aloe Vera', price: 10, img: 'images/plant5.jpg' },
    { id: 6, name: 'Cactus', price: 8, img: 'images/plant6.jpg' },
  ];
  return plants.find(p => p.id === id);
}

function addToCart(plantId, button) {
  const plant = getPlantById(plantId);
  cart.push(plant);
  localStorage.setItem('cart', JSON.stringify(cart));
  button.disabled = true;
  updateCartIcon();
}

updateCartIcon();