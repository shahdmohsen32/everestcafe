
let cart = [];
function addToCart(item) {
  cart.push(item);
  document.getElementById("cart-count").innerText = cart.length;
  updateCartDisplay();
}
function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerText = item + " ";
    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = () => removeItem(i);
    li.appendChild(btn);
    cartList.appendChild(li);
  });
}
function removeItem(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").innerText = cart.length;
  updateCartDisplay();
}
function loginUser(e) {
  e.preventDefault();
  alert("Logged in (demo only)");
}
