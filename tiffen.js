let cart = [];


/* ADD TO CART */

function addToCart(name, price) {

    let existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    displayCart();

    alert(name + " added to cart! 🛒");
}


/* DISPLAY CART */

function displayCart() {

    let cartItems =
        document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty">Your cart is empty.</p>';

    }


    cart.forEach((item, index) => {

        let itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <h4>${item.name}</h4>

                    <p>
                        ₹${item.price} ×
                        ${item.quantity}
                    </p>

                </div>


                <div>

                    <button
                        onclick="decreaseItem(${index})">
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="increaseItem(${index})">
                        +
                    </button>

                </div>


                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    document.getElementById("totalPrice").innerText =
        "₹" + total;
}


/* INCREASE */

function increaseItem(index) {

    cart[index].quantity++;

    displayCart();
}


/* DECREASE */

function decreaseItem(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    displayCart();
}


/* CLEAR CART */

function clearCart() {

    cart = [];

    displayCart();
}


/* PLACE ORDER */

function placeOrder() {

    let name =
        document.getElementById("customerName").value.trim();

    let phone =
        document.getElementById("customerPhone").value.trim();

    let address =
        document.getElementById("customerAddress").value.trim();


    if (cart.length === 0) {

        alert("Please add food items to your cart.");

        return;
    }


    if (name === "" ||
        phone === "" ||
        address === "") {

        alert("Please fill all customer details.");

        return;
    }


    let message =
        "🍽️ *SIVA TIFFIN CENTER ORDER*%0A%0A";


    message +=
        "👤 Customer: " + name + "%0A";

    message +=
        "📞 Phone: " + phone + "%0A";

    message +=
        "📍 Address: " + address + "%0A%0A";


    message +=
        "*ORDER DETAILS*%0A";


    let total = 0;


    cart.forEach(item => {

        let itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        message +=
            "• " +
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "%0A";

    });


    message +=
        "%0A💰 *TOTAL: ₹" +
        total +
        "*";


    /*
       IMPORTANT:
       Replace 919876543210 with
       your Tiffin Center WhatsApp number.
    */

    let whatsappNumber =
        "919894588302";


    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );

}