// TODO - add bootstrap input field (longer)

var startButton = document.getElementById("startButton")
var textInput = document.getElementById("textInput")
var kwikWords = document.getElementById("kwikWords")

var textIndex
var wordsArray

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

    // Call the displayWords function to show the words inside the kwikWords div
    displayWords(wordsArray)
}

// 
function displayWords(wordsArray) {
    // Iterating over all words in the wordsArray array
    for (let i = 0; i < wordsArray.length; i++) {

        delay(i)
        // console.log(wordsArray[i])
        // Wait
    }
}

function delay(i) {
    setTimeout(() => {
        console.log(wordsArray[i])
        kwikWords.innerText = wordsArray[i]
    }, 1000*i);
}