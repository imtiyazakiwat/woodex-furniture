// Function to add item to cart
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.id === id);
    if (item) {
      item.quantity++;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  
  // Function to add item to wishlist
  function addToWishlist(id, name, price, image) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.id === id)) {
      wishlist.push({ id, name, price, image });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    updateWishlistCount();
  }
  
  // Function to update cart count
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
  }
  
  // Function to update wishlist count
  function updateWishlistCount() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.querySelector('.wishlist-count').textContent = wishlist.length;
  }
  
  // Call these functions when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
  });