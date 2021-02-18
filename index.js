// TODO - add bootstrap input field (longer)
// TODO - ad buttons for WPM speed

var startButton = document.getElementById("startButton")
var textInput = document.getElementById("textInput")
var kwikWords = document.getElementById("kwikWords")

var textIndex
var wordsArray
// Words per minute
var wpm = 1000

startButton.addEventListener("click", function (event) {
    // To stop page refresh
    event.preventDefault()

    console.log("startButton clicked")

    // Get the value from textInput and save it in text
    let text = textInput.value
    console.log(text)

    // Filter the text
    filterText(text)
})

// This function takes the user inputted string and changes it into an array of words
function filterText(text) {
    // TODO
    // Add a timer to display the words
    // Research how many words per second to display for 200WPM, 400WPM reading speed etc.

    // Here, separate each word into an array called wordsArray
    wordsArray = text.split(" ")
    console.log(wordsArray)

    // Call the arrayIterator function to show the words inside the kwikWords div
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
    // Anonymous function that sets the innerText of kwikWords to the word with current index with time delay of wpm
    setTimeout(() => {
        console.log(wordsArray[i])
        kwikWords.innerText = wordsArray[i]
    }, wpm*i) // The '*i' is needed to get a pause between each word instead of a singular pause before the words. If that is removed, it will have a delay of 'wpm' and then the last word in the array will be visible due to no delay between words
}