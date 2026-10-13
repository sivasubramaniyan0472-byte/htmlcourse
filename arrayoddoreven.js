let numbers = [10, 25, 60, 45, 80, 33, 12, 90, 55, 7, 42, 68, 21, 100, 49];

function analyzeNumbers() {

    let even = [];
    let odd = [];
    let greater = [];
    let less = [];

    let sum = 0;
    let largest = numbers[0];
    let smallest = numbers[0];

    for (let number of numbers) {

        if (number % 2 == 0) {
            console.log(number);
        } else {
            odd.push(number);
        }

        if (number > 50) {
            greater.push(number);
        } else {
            less.push(number);
        }

        sum = sum + number;

        if (number > largest) {
            largest = number;
        }

        if (number < smallest) {
            smallest = number;
        }
    }

    console.log("Even:", even);
    console.log("Odd:", odd);
    console.log("Greater than 50:", greater);
    console.log("Less than 50:", less);
    console.log("Sum:", sum);
    console.log("Largest:", largest);
    console.log("Smallest:", smallest);
}

analyzeNumbers();