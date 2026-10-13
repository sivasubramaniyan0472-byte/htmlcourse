let products = [
    {
        name: "pencil",
        price: 5,
        quantity: 50
    },
    {
        name: "colour pencil",
        price: 30,
        quantity: 20
    },
    {
        name: "eraser",
        price: 10,
        quantity: 50
    }
];

function calculateTotal() {

    let total = 0;

    for (let product of products) {
        let productTotal = product.price * product.quantity;

        console.log(
            product.name + " = ₹" + productTotal
        );

        total = total + productTotal;
    }

    let discount = 0;

    if (total > 1000) {
        discount = total * 10 / 100;
    }

    let finalAmount = total - discount;

    console.log("Original Amount: ₹" + total);
    console.log("Discount: ₹" + discount);
    console.log("Final Amount: ₹" + finalAmount);
}

calculateTotal();