let correctPIN = 1234;
let attempts = 3;

while (attempts > 0) {

    let pin = Number(prompt("Enter your PIN:"));

    if (pin === correctPIN) {
        console.log("Access Granted. Welcome!");
        break;
    } else {
        attempts--;
        console.log("Wrong PIN. Attempts left: " + attempts);
    }
}

if (attempts === 0) {
    console.log("Account Locked. Too many failed attempts.");
}