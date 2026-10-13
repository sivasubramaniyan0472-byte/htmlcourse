let correctPin = 1234;
let attempts = 0;

while (attempts < 3) {

    let pin = 1876; 

    if (pin == correctPin) {
        console.log("Access Granted. Welcome!");
        break;
    }

    attempts++;
}
if (attempts == 3) {
    console.log("Account Locked. Too many failed attempts.");
}