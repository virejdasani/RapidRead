var startButton = document.getElementById("startButton")
var textInput = document.getElementById("textInput")
var rapidWords = document.getElementById("rapidWords")
var wpmInput = document.getElementById("wpmInput")

var textIndex
var wordsArray
var tmpWpm
var wpm

startButton.addEventListener("click", function (event) {
    // To stop page refresh
    event.preventDefault()

    console.log("startButton clicked")

    // Get the value from textInput and save it in text
    let text = textInput.value
    // console.log(text)

    // Get words per minute
    tmpWpm = parseInt(wpmInput.value)

// THIS FORMULA IS BROKEN, DO NOT USE
    // This formula is to get the number of milliseconds gap between 2 words for any amount of words per minute (tmpWpm)
    // wpm = 1000 + (1000 - ((tmpWpm * 1000)/60))
    // When wpm becomes negative, add a thousand and make it positive (This is part of the formula)
    // if (wpm < 0) {
    //     wpm += 1000
    //     wpm = wpm *-1
    // }

    // WPM CONVERSIONS
    if (tmpWpm === 50) {
        wpm = 1166.67
    } else if (tmpWpm === 100) {
        wpm = 583.33
    } else if (tmpWpm === 200) {
        wpm = 291.67
    } else if (tmpWpm === 300) {
        wpm = 218.76
    } else if (tmpWpm === 400) {
        wpm = 145.84
    }

    // console.log(tmpWpm, "tmpWpm")
    console.log(wpm, "ms before each word")

    // Filter the text
    filterText(text)
})

// This function takes the user inputted string and changes it into an array of words
function filterText(text) {
    // Replace new lines with spaces
    text = text.replace(/\n/g, " ")
    // Replace double spaces with single spaces
    text = text.replace("  ", " ")
    // Replace triple spaces with single spaces
    text = text.replace("   ", " ")

    // Here, separate each word into an array called wordsArray
    // Words are separated by removing spaces and adding them into an array
    wordsArray = text.split(" ")
    console.log(wordsArray)

    // Call the arrayIterator function to show the words inside the rapidWords div
    arrayIterator(wordsArray)
}

// Function to iterate over the words in the array
function arrayIterator(wordsArray) {
    // Iterating over all words in the wordsArray array
    for (let i = 0; i < wordsArray.length; i++) {
        // Delay the displaying of words by the wpm. This is done in the displayWords() function
        displayWords(i)
    }
}

// This function takes the index from arrayIterator() and displays the word from wordsArray with that index (i)
// It also delays the displaying of the words based upon the WPM selected
function displayWords(i) {
    // Anonymous function that sets the innerText of rapidWords to the word with current index with time delay of wpm
    setTimeout(() => {
        console.log(wordsArray[i])
        rapidWords.innerText = wordsArray[i]
    }, wpm * i) // The '*i' is needed to get a pause between each word instead of a singular pause before the words. If that is removed, it will have a delay of 'wpm' and then the last word in the array will be visible due to no delay between words
}