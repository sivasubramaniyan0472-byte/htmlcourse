let words = [
    "apple",
    "banana",
    "computer",
    "book",
    "school",
    "javascript",
    "pen",
    "mobile",
    "table",
    "keyboard"
];

function analyzeWords() {

    let moreThan5 = 0;
    let fiveOrLess = 0;

    for (let word of words) {

        let characters = word.length;

        console.log("Word:", word);
        console.log("Characters:", characters);

        if (characters > 5) {
            console.log("More than 5 characters: Yes");
            moreThan5++;
        } 
        else {
            console.log("More than 5 characters: No");
            fiveOrLess++;
        }

        console.log("----------------");
    }

    console.log("Words more than 5 characters:", moreThan5);
    console.log("Words with 5 or fewer characters:", fiveOrLess);
}

analyzeWords();
