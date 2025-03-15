let cart = [];

// Añadir al carrito
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

// Actualizar carrito
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;

    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.productName} - S/ ${item.price}</p>`;
    });

    totalPrice.innerText = total;
}

// Mostrar carrito
function showCart() {
    document.getElementById('carrito-popup').style.display = 'block';
}

// Cerrar carrito
function closeCart() {
    document.getElementById('carrito-popup').style.display = 'none';
}

// Filtrar productos por categoría
function filterCategory(category) {
    const allProducts = document.querySelectorAll('.productos-categoria');
    allProducts.forEach(productCategory => {
        if (productCategory.id === category) {
            productCategory.style.display = 'grid';
        } else {
            productCategory.style.display = 'none';
        }
    });
}

// Mostrar todos los productos
function showAll() {
    const allProducts = document.querySelectorAll('.productos-categoria');
    allProducts.forEach(productCategory => {
        productCategory.style.display = 'grid';
    });
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.producto');

    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Filtrar por precio
function filterByPrice() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    priceValue.innerText = `S/ ${priceRange.value}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById("avatar");
    const chatbox = document.getElementById("chatbox");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    // Open chatbox on avatar click
    avatar.addEventListener("click", () => {
        chatbox.style.display = "block";
        avatar.style.animation = "none"; // Stop bounce animation after first interaction
        playSound("open");
    });

    // Close chatbox
    closeChat.addEventListener("click", () => {
        chatbox.style.display = "none";
        playSound("close");
    });

    // Send user message
    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            displayMessage("Usuario", userMessage);
            respondToUser(userMessage);
            userInput.value = "";
        }
    });

    // Display messages in chat
    function displayMessage(sender, message, isHTML = false) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "Usuario" ? "user-message" : "assistant-message";
        if (isHTML) {
            messageElement.innerHTML = message;
        } else {
            messageElement.textContent = `${sender}: ${message}`;
        }
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Automated responses
    function respondToUser(message) {
        let response = "Lo siento, no entendí tu consulta. ¿Puedes reformularla?";

        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes("hola") || lowerMessage.includes("buenos días") || lowerMessage.includes("buenas tardes")) {
            response = "¡Hola! ¿En qué puedo ayudarte hoy?";
        } else if (lowerMessage.includes("ayuda") || lowerMessage.includes("ayúdame")) {
            response = "Claro, estoy aquí para ayudarte. ¿Qué necesitas saber o hacer?";
        } else if (lowerMessage.includes("productos")) {
            response = `¿Qué tipo de productos buscas? Aquí tienes algunos recomendados:<br>
                <button onclick="window.open('https://example.com/laptops', '_blank')">Laptops</button>
                <button onclick="window.open('https://example.com/perifericos', '_blank')">Periféricos</button>`;
        } else if (lowerMessage.includes("ofertas")) {
            response = `Actualmente tenemos descuentos especiales:<br>
                <button onclick="window.open('https://example.com/ofertas', '_blank')">Ver Ofertas</button>`;
        } else if (lowerMessage.includes("contacto")) {
            response = `Puedes contactarnos al correo <a href="mailto:soporte@tutienda.com">soporte@tutienda.com</a> o llamarnos al <strong>123-456-789</strong>.`;
        } else if (lowerMessage.includes("carrito")) {
            response = `Para agregar productos a tu carrito, selecciona una categoría primero:<br>
                <button onclick="window.open('https://example.com/categorias', '_blank')">Ver Categorías</button>`;
        } else if (lowerMessage.includes("gracias")) {
            response = "¡De nada! Si necesitas algo más, aquí estaré.";
        } else if (lowerMessage.includes("adiós") || lowerMessage.includes("chau")) {
            response = "¡Hasta luego! Espero haberte ayudado.";
        } else if (lowerMessage.includes("buscar") && lowerMessage.includes("producto")) {
            response = "¡Claro! ¿Qué producto estás buscando específicamente? Puedo ayudarte a encontrarlo.";
        } else if (lowerMessage.includes("qué producto me recomiendas")) {
            response = `Depende de lo que necesites. Aquí tienes algunas opciones populares:<br>
                <button onclick="window.open('https://example.com/mejores-laptops', '_blank')">Laptops Recomendadas</button>
                <button onclick="window.open('https://example.com/accesorios', '_blank')">Accesorios Destacados</button>`;
        } else if (lowerMessage.includes("envíos") || lowerMessage.includes("entrega")) {
            response = "Hacemos envíos a todo el país. El tiempo de entrega varía entre 3 a 7 días hábiles dependiendo de tu ubicación.";
        } else if (lowerMessage.includes("devoluciones")) {
            response = "Ofrecemos devoluciones gratuitas dentro de los primeros 30 días si el producto está en su estado original. ¿Necesitas más información?";
        } else if (lowerMessage.includes("garantía")) {
            response = "Todos nuestros productos tienen garantía mínima de 1 año. Puedes contactarnos si necesitas más detalles.";
        } else if (lowerMessage.includes("mouse") && lowerMessage.includes("recomiendas")) {
            response = `Para trabajar y jugar, recomiendo los siguientes modelos:<br>
                <button onclick="window.open('https://example.com/logitech-g502', '_blank')">Logitech G502</button>
                <button onclick="window.open('https://example.com/razer-deathadder', '_blank')">Razer DeathAdder</button>
                <button onclick="window.open('https://example.com/corsair-dark-core', '_blank')">Corsair Dark Core</button>`;
        }

        setTimeout(() => {
            displayMessage("Asistente", response, true);
            playSound("response");
        }, 1000);
    }

    function playSound(type) {
        // Implementación de sonidos, si aplica
        console.log(`Reproduciendo sonido: ${type}`);
    }
});
