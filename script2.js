let cart = [];

function addToCart(product, price, image) {
  cart.push({ product, price, image });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${item.image}" alt="${item.product}" width="50"> ${item.product} - ETB ${item.price}`;
    cartList.appendChild(li);
  });

  // Show total price if you want it displayed (optional)
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  let totalElement = document.getElementById("total-price");

  // If the element doesn't exist, create it and add it below the list
  if (!totalElement) {
    totalElement = document.createElement("p");
    totalElement.id = "total-price";
    cartList.parentElement.appendChild(totalElement);
  }

  totalElement.textContent = `Total: ETB ${total.toFixed(2)}`;
}

function sendOrder(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const orderDetails = cart.map(item => `${item.product}: ETB ${item.price}`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const orderMessage = `
Order from: ${name}
Email: ${email}
Phone: ${phone}  
Message: ${message}

Products:
${orderDetails}

Total: ETB ${total.toFixed(2)}
`;

  const mailtoLink = `mailto:netsizeru2@gmail.com?subject=New Order&body=${encodeURIComponent(orderMessage)}`;
  window.location.href = mailtoLink;
}

// Function to handle form submission
function handleFormSubmission
